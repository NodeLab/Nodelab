var path = require('path');
var rootPath = path.normalize(__dirname + '/..')

module.exports={

	development:{
		db: 'mongodb://localhost/noobjs_dev',
		app:{
			name:'NodeLab'
		}
	}
}