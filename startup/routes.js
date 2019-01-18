const error = require('../middleware/error');
const testRoutes = require('../routes/test');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/test', testRoutes);
    app.use(error);
}