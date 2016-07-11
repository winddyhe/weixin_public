var poolModule  = require('generic-pool');
var mySqlConfig = require('./config.json'); 

var createMySqlPool = function (app)
{
    return poolModule.Pool({
        name: 'mysql',
        create: function (cb) {
            var mysql = require('mysql');
            var client = mysql.createConnection({
                host: mySqlConfig.host,
                user: mySqlConfig.user,
                password: mySqlConfig.password,
                database: mySqlConfig.database
            });
            cb(null, client);
        },
        destroy: function (client) {
            client.end();
        },
        max: 10,
        idleTimeoutMillis: 30000,
        log: false
    });
};

exports.createMySqlPool = createMySqlPool;