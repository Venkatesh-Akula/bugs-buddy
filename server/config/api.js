/**
 * Created by pavap on 05/10/2016.
 */

module.exports = function(app){

    app.use('/api/dashboard', require('../api/dashboard'));
    app.use('/api/incident', require('../api/incident'));
    app.use('/api/search', require('../api/search'));

}
