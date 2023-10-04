var mongoose = require('mongoose');

// Schema

var user_Schema = new mongoose.Schema({
     name: {
          type: String,
     },
     email: {
          type: String,
     },
     password: {
          type: String
     }
})

module.exports = mongoose.model('User',user_Schema );