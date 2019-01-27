//Require Mongoose
var mongoose = require("mongoose");
//Define a schema
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  name: String,
  company: String,
  profile: String,
  email: String,
  phoneWork: String,
  phonePersonal: String,
  birthdate: Date,
  address: String,
  city: String,
  state: String
});

ContactSchema.index({ email: 1, name: 1 });

module.exports = exports = mongoose.model("Contact", ContactSchema);
