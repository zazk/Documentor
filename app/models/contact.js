//Require Mongoose
var mongoose = require("mongoose");
//Define a schema
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: { type: String, required: true },
  company: String,
  profile: String,
  email: { type: String, unique: true, required: true },
  phoneWork: String,
  phonePersonal: String,
  birthdate: Date,
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  active: {
    type: Boolean,
    default: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }
});

module.exports = exports = mongoose.model("Contact", ContactSchema);
