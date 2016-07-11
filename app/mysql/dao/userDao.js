var dbclient = require('./../db.js');

var userDao = module.exports;

userDao.createUser = function (app, userID, userName, userPwd, cb) {
    var sql = 'insert into user (user_id, user_name, user_pwd) values (?, ?, ?)';
    var args = [userID, userName, userPwd];

        dbclient.insert(sql, args, function (err, res) {
        if (err) {
            console.log('create user failed! ', err.stack);
        } else {
            console.log('create user succeed!');
        }
    });
};

