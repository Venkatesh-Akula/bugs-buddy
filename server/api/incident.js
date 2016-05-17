/**
 * Created by Pkp on 5/14/2016.
 */

var express = require('express');
var router = express.Router();
var incidentController = require('../controllers/incidents');

router.use(function(req, res, next) {

    next();
});

router.post('/create', function(req, res){

    incidentController.createIncident(req, res);

});

router.post('/incident-detail', function(req, res){

    incidentController.getIncidentById(req.body.incidentID, res);


});

router.post('/update', function(req, res){

    incidentController.updateIncident(req.body, res);

})

module.exports = router;
