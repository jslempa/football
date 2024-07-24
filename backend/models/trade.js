const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Trade = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        buyOrSell: {type: String, enum: ['buy', 'sell'], required: true},
        player: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
        numShares: {type: Number, min: 1, required: true},
        price: {type: Number, min: .01, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('trades', Trade)