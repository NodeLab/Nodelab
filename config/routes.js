var async = require('async');
var index = require('../app/controllers/index')

module.exports = function (app){

	 // home route
 	 app.get('/', index.show)

}