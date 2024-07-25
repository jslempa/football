const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: {type: String, required: true, unique: true, minLength: 6},
        password: {type: String, required: true, minLength: 6},
        email: {type: String, required: true, unique: true},
        image: {type: String, required: false},
        isLoggedIn: {type: Boolean, required: true},
        balance: {type: Number, min: .01, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('users', User)