import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  description: String,
  isActive: String,
  effectiveTill: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});



export const Habit = mongoose.model('Habit', habitSchema);


//   type Todos {
//     id: String!,
//     title: String!,
//     description: String,
//     category: Int!,
//     tags: [String],
//     type: String,
//     createdAt: String!,
//     modifiedAt: String!
//   }

//   type Category {
//     id: String!,
//     name: String!,
//     description: String,
//     isActive: String,
//     createdAt: String!,
//     modifiedAt: String!
//     effectiveTill: String
//   }

//   type Tags {
//     id: String!,
//     name: String!
//   }

//   type Frequency {
//     id: String!,
//     monday: Boolean,
//     tuesday: Boolean,
//     wednesday: Boolean,
//     thursday: Boolean,
//     friday: Boolean,
//     saturday: Boolean,
//     sunday: Boolean
//   }
