import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import schema from './src/graphql/schema';
import Seed from './src/graphql/connector';
import schema from './src/graphql/schema/index';
// import fbOauth from './src/auth';
// fbOauth(passport);

const GRAPHQL_PORT = 3000;

const server = express();

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:3000/subscriptions`
}));

// We wrap the express server so that we can attach the WebSocket for subscriptions
const ws = createServer(server);

// Set up facebook authentication

const secret = 'secret';

/* Returns middleware that only parses json. */
app.use(bodyParser.json());

/* Returns middleware that only parses urlencoded bodies. */
app.use(bodyParser.urlencoded({
  extended: false,
}));

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(methodOverride());

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
app.use(cookieParser(secret));

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret,
  resave: true,
  saveUninitialized: false,
}));
// PassportJS is Express-compatible authentication middleware for Node.js.
// Intializes PassportJS for incoming requests, allowing authentication strategies to be applied.
app.use(passport.initialize());

// The session authentication strategy uses the session to restore any login state across requests.
// If a login session has been established, `req.user` will be populated with the current user.
app.use(passport.session());

app.get('/api/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
// TODO set header with token and isAuth flag set to True
app.get('/api/auth/facebook/callback',
  passport.authenticate('facebook', {
    // successRedirect: '/home',
    failureRedirect: '/',
  }),
  (req, res) => {
    req.res.cookie('PROGRESS_PLANNER', req.user.id, { maxAge: 900000, httpOnly: false });
    res.redirect('/home');
  }
);
ws.listen(GRAPHQL_PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
});

// if (module.hot) {
//  module.hot.accept(['/src/graphql/schema/index.js'], () => {
//   server.removeListener('request', currentApp);
//   server.on('request', app);
//   currentApp = app;
//  });
// }
