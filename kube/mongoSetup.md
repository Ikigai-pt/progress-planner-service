### MongoDB statefulset replications setup

```
echo "Replicaset Init mongodb-shard1-0 "
kubectl exec --namespace=progressplannerns mongodb-shard1-0 -c mongodb-shard1-container -- mongo --port 27017 --eval "rs.initiate({_id: \"Shard1\", version: 1, members: [ {_id: 0, host: \"mongodb-shard1-0.mongodb-shard1-headless-service.progressplannerns.svc.cluster.local:27017\"} ] });"

echo "Replicaset Init mongodb-shard2-0 "
kubectl exec --namespace=progressplannerns mongodb-shard2-0 -c mongodb-shard2-container -- mongo --port 27017 --eval "rs.initiate({_id: \"Shard2\", version: 1, members: [ {_id: 0, host: \"mongodb-shard2-0.mongodb-shard2-headless-service.progressplannerns.svc.cluster.local:27017\"} ] });"

echo "Adding Shard 1 : Shard1 "
kubectl exec --namespace=progressplannerns $(kubectl get pod -l "tier=routers" -o jsonpath='{.items[0].metadata.name}' --namespace=progressplannerns ) -c mongos-container -- mongo --port 27017 --eval "sh.addShard(\"Shard1/mongodb-shard1-0.mongodb-shard1-headless-service.progressplannerns.svc.cluster.local:27017\");"
echo "Adding Shard 2 : Shard2 "
kubectl exec --namespace=progressplannerns $(kubectl get pod -l "tier=routers" -o jsonpath='{.items[0].metadata.name}' --namespace=progressplannerns ) -c mongos-container -- mongo --port 27017 --eval "sh.addShard(\"Shard2/mongodb-shard2-0.mongodb-shard2-headless-service.progressplannerns.svc.cluster.local:27017\");"

## check status

kubectl exec --namespace=progressplannerns mongodb-shard1-0 -c mongodb-shard1-container -- mongo --port 27017 --eval "rs.status()"
kubectl exec --namespace=progressplannerns mongodb-shard1-0 -c mongodb-shard1-container -- mongo --port 27017 --eval "rs.config()"
```
