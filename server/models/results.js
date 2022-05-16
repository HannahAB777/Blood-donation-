const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultSchema = new Schema({
  PatientFirstName: {
    type: String,
    required: true,
    trim: true
  },
  PatientLastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber:{
    type: Number,
    required: true,
    //cellphone number validation
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

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
