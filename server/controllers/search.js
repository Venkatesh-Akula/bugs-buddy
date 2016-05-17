/**
 * Created by pavap on 05/16/2016.
 */

var Incident = require('../models/Incidents');
var Incidents = require('mongoose').model('Incident');

exports.searchByDateRange = function(req, res){

    var fromDate = req.body.fromDate;
    fromDate = fromDate+" 00:00:00";
    var toDate = req.body.toDate;
    toDate = toDate+" 23:59:59";
    Incidents.find()
        .where('reportedDate').gte(fromDate).lte(toDate)
        .exec(function(err, docs){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        }
    );
}

exports.searchByApplication = function(req, res){

    var application = req.body.application;
    Incidents.find()
        .where('application').equals(application)
        .sort({ reportedDate : '-1'})
        .exec(function(err, docs){
            if(err) return res.status(500).json("Internal Server Error");
            res.status(200).json(docs);
        }
    );
}
