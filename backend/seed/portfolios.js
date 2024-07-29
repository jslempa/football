const db = require('../db')
const Portfolio = require('../models/portfolio')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jo = await User.find({username: 'jslempa'})
    const jim = await User.find({username: 'jhalpert'})
    const pam = await User.find({username: 'pbeesly'})
    const michael = await User.find({username: 'mscott'})
    const dwight = await User.find({username: 'dschrute'})

    const portfolios = [
        {
            user: jo[0]._id,
            players: [],
            value: 0
        },
        {
            user: jim[0]._id,
            players: [],
            value: 0
        },
        {
            user: pam[0]._id,
            players: [],
            value: 0
        },
        {
            user: michael[0]._id,
            players: [],
            value: 0
        },
        {
            user: dwight[0]._id,
            players: [],
            value: 0
        },
    ]
    await Portfolio.insertMany(portfolios)
    console.log('Created portfolios')
}

const run = async () => {
    await main()
    db.close()
}

run()