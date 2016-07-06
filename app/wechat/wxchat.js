var express  = require('express');
var wechat   = require('wechat');
var wxConfig = require('./config.json');

var wxApi    = require('./wxapi.js');

var WxChat     = function(){ };
module.exports = new WxChat();

WxChat.prototype.listening_message = function(app)
{
    app.use('/wechat', wechat(wxConfig.wxToken)
    .text(function (message, req, res, next) 
    {
        console.log('--- Winddy: ', message);
        res.reply({type: "text", content: '收到消息: ' + message.Content });
    })
    .image(function (message, req, res, next) 
    {
        
    })
    .voice(function (message, req, res, next) 
    {
        
    })
    .video(function (message, req, res, next) 
    {
        
    })
    .location(function (message, req, res, next) 
    {
        
    })
    .link(function (message, req, res, next) 
    {
        
    })
    .event(function (message, req, res, next) 
    {
        console.log('--- Winddy: ', message);
        if (message.EventKey === 'V1001_ConnectUs') {
            res.reply({type: "text", content: '你要联系我们了!' });
            wxApi.send_text(message);
        }
    })
    .device_text(function (message, req, res, next) 
    {

    })
    .device_event(function (message, req, res, next) 
    {
    }).middlewarify());
};