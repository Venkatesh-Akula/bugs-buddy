var mongoose = require('mongoose');

var incidentSchema = mongoose.Schema({
  incidentID: {type:String, unique:true},
  reportedDate: {type:Date, default: Date.now},
  title: {
    type: String,
    required: '{PATH} is required!'
      },
  incidentType: { type:String },
  reportedBy: {type:String},
  application: {type:String},
  version: {type:String,  required: '{PATH} is required!' },
  site: {type:String, default: 'Global'},
  resolutionType: {type:String, default : 'Other'},
  priority: {type:String},
  status: {type:String, default: 'Open'},
  releaseDate: {type:Date, default: Date.now},
  description : {type : String}});

var Incident = mongoose.model('Incident', incidentSchema);


module.exports = Incident;