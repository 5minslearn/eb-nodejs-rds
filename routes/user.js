
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render("respond with a resource");
};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};