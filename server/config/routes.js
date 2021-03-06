
module.exports = function(app){

	app.get('/partials/incident/incident-detail/:id', function(req, res) {
 	
 	     res.render('partials/incident/incident-detail');
  })

 .get('/partials/*', function(req, res) {
 	
    res.render('partials/' + req.params[0]);
  })


 .get('/damn-it/', function(req, res){

 	res.render('utilities/error');
 })

 .get('*', function(req, res){
  res.render('index');

});

 //catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('utilities/error');
});

}