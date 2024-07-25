const db = require('../db')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const users = [
        {
            username: 'jslempa',
            password: '123456',
            email: 'jslempa@gmail.com',
            image: 'img.png',
            isLoggedIn: true,
            balance: 100
        },
        {
            username: 'lavenderwich',
            password: '111111',
            email: 'fakeemail1@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        },
        {
            username: 'gideonmcove',
            password: '222222',
            email: 'fakeemail2@gmail.com',
            image: 'img.png',
            isLoggedIn: false,
            balance: 0
        },
        {
            username: 'jtaubman',
            password: '333333',
            email: 'fakeemail3@gmail.com',
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