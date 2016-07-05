var leanEngine = require('leanengine');

leanEngine.Cloud.define('Hello', function(request, response){
    response.success('Hello world! Winddy.');
});

module.exports = leanEngine.Cloud;