import Mongoose from 'mongoose';
Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect("mongodb://localhost:27017/progressPlanner");

