const db = require('../db')
const Watchlist = require('../models/watchlist')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jo = await User.find({username: 'jslempa'})
    const jim = await User.find({username: 'jhalpert'})
    const pam = await User.find({username: 'pbeesly'})
    const michael = await User.find({username: 'mscott'})
    const dwight = await User.find({username: 'dschrute'})

    const watchlists = [
        {
            user: jo[0]._id,
            players: []
        },
        {
            user: jim[0]._id,
            players: []
        },
        {
            user: pam[0]._id,
            players: []
        },
        {
            user: michael[0]._id,
            players: []
        },
        {
            user: dwight[0]._id,
            players: []
        }
    ]
    await Watchlist.insertMany(watchlists)
    console.log('Created watchlists')
}

const run = async () => {
    await main()
    db.close()
}

run()