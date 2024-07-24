const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
    {
       
        image: {type: String, required: false},
        
    },
    {timestamps: true}
)

module.exports = mongoose.model('players', Player)