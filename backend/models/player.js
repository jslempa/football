const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Player = new Schema(
    {
        espnID: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: false},
        position: {type: String, required: true},
        team: {type: String, required: true},
        age: {type: Number, min: 0, required: true},
        stats: {
            gamesPlayed: {type: String, default: '0'},
            passAttempts: {type: String, default: '0'},
            passCompletions: {type: String, default: '0'},
            passYds: {type: String, default: '0'},
            passTD: {type: String, default: '0'},
            int: {type: String, default: '0'},
            rushAttempts: {type: String, default: '0'},
            rushYds: {type: String, default: '0'},
            rushTD: {type: String, default: '0'},
            targets: {type: String, default: '0'},
            receptions: {type: String, default: '0'},
            recYds: {type: String, default: '0'},
            recTD: {type: String, default: '0'}
        },
        initialValue: {type: Number, min: 1, default: 1, required: true},
        currentValue: {type: Number, min: 1, default: 1, required: true},
        sharePrice: {type: Number, min: .01, default: .01, required: true},
        netShares: {type: Number, default: 0},
        isRookie: {type: Boolean, default: false},
        isTrending: {type: Boolean, default: false},
        isRising: {type: Boolean, default: false},
        isFalling: {type: Boolean, default: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model('players', Player)