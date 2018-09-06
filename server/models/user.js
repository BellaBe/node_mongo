const mongoose = require('mongoose');


let User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

module.exports = {User}
