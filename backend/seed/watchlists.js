const db = require('../db')
const Watchlist = require('../models/watchlist')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jo = await User.find({username: 'jslempa'})
    const kass = await User.find({username: 'lavenderwich'})
    const gideon = await User.find({username: 'gideonmcove'})
    const jeremy = await User.find({username: 'jtaubman'})

    const watchlists = [
        {
            user: jo[0]._id,
            players: []
        },
        {
            user: kass[0]._id,
            players: []
        },
        {
            user: gideon[0]._id,
            players: []
        },
        {
            user: jeremy[0]._id,
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