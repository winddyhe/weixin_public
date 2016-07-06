var wechat = require('wechat-api');
var wx_config = require('./config.json');

var wxAppID = wx_config.wxAppID;
var wxAppSecret = wx_config.wxAppSecret;
var wxLogoPath = wx_config.logoPath;

var wxApi = new wechat(wxAppID, wxAppSecret);

var WxApi = function () { };
module.exports = new WxApi();

/**
 * 创建微信菜单
 */
WxApi.prototype.create_menu = function () {
    wxApi.createMenu(wx_config.wxMenu, function (err, result) {
        console.log('---- Winddy: create menu, ', result);
    });
};

WxApi.prototype.send_text = function (message) {
    //wxApi.addKfAccount('winddyhe@gh_24c9c11c200d', '小爱', 'naruto78981223', function(err, result){
    //   console.log('---- Winddy: add kf, ', result);

    // wxApi.getCustomServiceList(function (err, result) {
    //     console.log('---- Winddy: add kf, ', result);
    // });
    // wxApi.sendText('winddyWeiXinCourse', "Hello world..你好", function (err, result) {
    //     console.log('---- Winddy: add kf, ', result);
    //});
    //});

    wxApi.sendText(message.FromUserName, '你好，007号为您服务！', function (err, result) {
        console.log('---- Winddy: send text, ', result);
    });
};