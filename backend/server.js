const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const playerController = require('./controllers/playerController')
const portfolioController = require('./controllers/portfolioController')
const tradeController = require('./controllers/tradeController')
const userController = require('./controllers/userController')
const watchlistController = require('./controllers/watchlistController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.get('/players', playerController.getAllPlayers)
app.get('/players/espn/:espnID', playerController.getPlayerByEspnID)
app.get('/players/:id', playerController.getPlayerById)
app.post('/players', playerController.createPlayer)
app.put('/players/:espnID', playerController.updatePlayer)
app.delete('/players/:id', playerController.deletePlayer)

app.get('/portfolios', portfolioController.getAllPortfolios)
app.get('/portfolios/user/:userID', portfolioController.getPortfolioByUser)
app.get('/portfolios/:id', portfolioController.getPortfolioById)
app.post('/portfolios', portfolioController.createPortfolio)
app.put('/portfolios/:id', portfolioController.updatePortfolio)
app.delete('/portfolios/:id', portfolioController.deletePortfolio)

app.get('/trades', tradeController.getAllTrades)
app.get('/trades/:id', tradeController.getTradeById)
app.post('/trades', tradeController.createTrade)
app.put('/trades/:id', tradeController.updateTrade)
app.delete('/trades/:id', tradeController.deleteTrade)

app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

app.get('/watchlists', watchlistController.getAllWatchlists)
app.get('/portfolios/user/:userID', portfolioController.getPortfolioByUser)
app.get('/watchlists/:id', watchlistController.getWatchlistById)
app.post('/watchlists', watchlistController.createWatchlist)
app.put('/watchlists/:id', watchlistController.updateWatchlist)
app.delete('/watchlists/:id', watchlistController.deleteWatchlist)