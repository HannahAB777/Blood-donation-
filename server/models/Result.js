const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultSchema = new Schema({
  patientFirstName: {
    type: String,
    required: true,
    trim: true
  },
  patientLastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber:{
    type: String,
    required: true,
    //cellphone number validation
  },
  code:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  toJSON: {
    virtuals: true,
  }
}
);

//add a virtual for the amount of results

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
