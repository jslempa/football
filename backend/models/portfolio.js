const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Portfolio = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        players: [{
            player: {type: Schema.Types.ObjectId, ref: 'Player', required: false},
            numShares: {type: Number, min: 1, required: false}
        }],
        value: {type: Number, min: 0, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('portfolios', Portfolio)