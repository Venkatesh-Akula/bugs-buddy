/**
 * Created by pavap on 05/09/2016.
 */

var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error Connecting to DB'));
    db.once('open', function callback() {
        console.log('Connected to Issue Tracker DB');

            });

};


