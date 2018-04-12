import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
const userSchema = new Schema({
  profileId: String,
  token: String,
  email: String,
  name: String,
});

const User = mongoose.model('User', userSchema);
export { User }
// // checking if password is valid using bcrypt
// userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.local.password);

// // this method hashes the password and sets the users password
// userSchema.methods.hashPassword = (password) => {
//   const user = this;
//   // hash the password
//   return bcrypt.hash(password, null, null, ((err, hash) => {
//     if (err) {
//       return err;
//     }
//     user.local.password = hash;
//     return user;
//   }));
// };

// create the model for users and expose it to our app
