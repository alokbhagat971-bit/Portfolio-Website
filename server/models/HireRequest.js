import mongoose from 'mongoose'

const hireRequestSchema = mongoose.Schema(
  {
    name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,

  },
  subject:{
    type:String,
    required:true
  },
  projectType:{
    type:String,
    required:true
  },
  budget: {
  type: String,
  },
  timeline: {
    type: String,
  },
  message:{
    type:String,
    required:true
  }

},
  {
    timestamps:true
  }
);

const HireRequest = mongoose.model(
  "HireRequest",
  hireRequestSchema
);

export default HireRequest;