var wechat      = require('wechat-api');

var wx_config   = require('./config.json');

var wxAppID = wx_config.wxAppID;
var wxAppSecret = wx_config.wxAppSecret;

var wxApi = new wechat(wxAppID, wxAppSecret);

function wx_create_menu() {
    wxApi.createMenu(wx_config.wxMenu, function(err, result){
        console.log('---- Winddy: ', result);
    });
};

module.exports = wx_create_menu;