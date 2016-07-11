var sqlclient = module.exports;

var _pool;
var NND = {};

/**
 * Init sql connection pool
 * @param {object} app: The app for the server.
 */
NND.init = function (app) {
    _pool = require('./dao-pool.js').createMySqlPool(app);
    console.log('mysql init succeed!');
};

/**
 * Excute sql statement
 * @param {string} sql:  Statement the sql need to excute.
 * @param {Object} args: The args for the sql.this.
 * @param {function cb:  Callback function.
 */
NND.query = function (sql, args, cb) {
    _pool.acquire(function (err, client) {
        if (!!err) {
            console.error('[sqlqueryErr] ' + err.stack);
            return;
        }
        client.query(sql, args, function (err, res) {
            _pool.release(client);
            cb(err, res);
        });
    });
};

/**
 * Close connection pool.
 */
NND.shutdown = function () {
    _pool.destroyAllNow();
};

/**
 * Init database.
 */
sqlclient.init = function (app) {
    if (!!_pool) {
        return sqlclient;
    } else {
        NND.init(app);
        sqlclient.insert = NND.query;
        sqlclient.update = NND.query;
        sqlclient.delete = NND.query;
        sqlclient.query  = NND.query;
        return sqlclient;
    }
};

/**
 * Shutdown database.
 */
sqlclient.shutdown = function (app) {
    NND.shutdown(app);
};