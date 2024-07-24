const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Watchlist = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        players: [{type: Schema.Types.ObjectId, ref: 'Player', required: false}]
    },
    {timestamps: true}
)

module.exports = mongoose.model('watchlists', Watchlist)