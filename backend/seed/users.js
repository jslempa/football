const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            username: 'jslempa',
            password: '111111',
            email: 'fakeemail1@gmail.com',
            image: 'https://photos.google.com/search/_m8_Favorites/photo/AF1QipPsLHSAkE3lM5KNsj723BZrHNS4lwpN6tFP64JZ',
            isLoggedIn: true,
            balance: 100
        },
        {
            username: 'jhalpert',
            password: '222222',
            email: 'fakeemail2@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        },
        {
            username: 'pbeesly',
            password: '333333',
            email: 'fakeemail3@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        },
        {
            username: 'mscott',
            password: '444444',
            email: 'fakeemail4@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        },
        {
            username: 'dschrute',
            password: '555555',
            email: 'fakeemail5@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        }
    ]
    await User.insertMany(users)
    console.log('Created users')
} 

const run = async () => {
    await main()
    db.close()
}

run()