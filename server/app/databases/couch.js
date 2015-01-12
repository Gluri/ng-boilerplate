/*
* Connect to CouchDB and expose the db object
* */

var admin = require('nano')('https://gennaro:uspabaranactivanz@ilbimbocresce.couchappy.com/_users');
var anon = require('nano')('https://ilbimbocresce.couchappy.com/_users');

admin.get('test', function(err) {
    if(err.error !== 'not_found') {
        console.log('Something went wrong connecting to CouchDB... :(');
        console.log(err);
    }

    if(!err) {
        console.log('Connected to CouchDB');
    }
});

function user(cookie) {
    return require('nano')({
        url: 'https://ilbimbocresce.couchappy.com:6984/_users',
        cookie: cookie
    });
}


module.exports = {
    admin: admin,
    anon: anon,
    user: user
};