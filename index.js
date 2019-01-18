const express = require('express'),
      winston = require('winston'),
      app = express();

require('./startup/logging')();
require('./startup/routes')(app);
// require('./startup/connection')();
require('./startup/config')();
require('./startup/prod')(app);

const port = process.env.PORT || 3000

const server = app.listen(port, ()=>{
    winston.info(`Listening on port ${port}...`);
});

module.exports = server;