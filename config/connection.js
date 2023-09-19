const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/miniSocialNetDB');  // TODO - note name of DB in README

module.exports = connection;
