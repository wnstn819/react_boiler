const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50

    },
    email: {
        type: String,
        trim: true, //빈칸 없애주는 역할
    },
    
    password: {
        type: String,
        minlength: 5
        
    },

    lastname: {
        type: String,
        maxlength: 50
    },

    role: {
        type: String,
        default: 0
    },
    Image: String,
    token: {
        type : String
    },

    tokenExp: {
        type: Number
    }
})


const User = mongoose.model('User',userSchema)


module.exports = {User}