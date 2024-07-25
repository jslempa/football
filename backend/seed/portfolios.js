const db = require('../db')
const Portfolio = require('../models/portfolio')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jo = await User.find({username: 'jslempa'})
    const kass = await User.find({username: 'lavenderwich'})
    const gideon = await User.find({username: 'gideonmcove'})
    const jeremy = await User.find({username: 'jtaubman'})

    const portfolios = [
        {
            user: jo[0]._id,
            players: [],
            value: 0
        },
        {
            user: kass[0]._id,
            players: [],
            value: 0
        },
        {
            user: gideon[0]._id,
            players: [],
            value: 0
        },
        {
            user: jeremy[0]._id,
            players: [],
            value: 0
        }
    ]
    await Portfolio.insertMany(portfolios)
    console.log('Created portfolios')
}

const run = async () => {
    await main()
    db.close()
}

run()