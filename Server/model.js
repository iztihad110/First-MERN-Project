let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },

    email: {
        type: String
    }

})

module.exports = mongoose.model('User', userSchema);