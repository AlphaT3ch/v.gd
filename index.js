var request = require('request');

module.exports = {
    shorten: function(url, cb) {
        request('http://v.gd/create.php?format=simple&url=' + url, function (error, response, body) {
			cb(body.split("\n")[0]);
        });
    }
};