const Watchlist = require('../models/watchlist')

const getAllWatchlists = async (req, res) => {
    try {
        const watchlists = await Watchlist.find()
        res.json(watchlists)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getWatchlistById = async (req, res) => {
    try {
        const { id } = req.params
        const watchlist = await Watchlist.findById(id)
        if (watchlist) {
            return res.json(watchlist)
        }
        return res.status(404).send('Watchlist not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createWatchlist = async (req, res) => {
    try {
        const watchlist = new Watchlist(req.body)
        await watchlist.save()
        return res.status(201).json({
            watchlist
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateWatchlist = async (req, res) => {
    try {
        let { id } = req.params
        let watchlist = await Watchlist.findByIdAndUpdate(id, req.body, {new: true})
        if (watchlist) {
            return res.status(200).json(watchlist)
        }
        throw new Error('Watchlist not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteWatchlist = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Watchlist.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Watchlist deleted')
        }
        throw new Error('Watchlist not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllWatchlists,
    getWatchlistById,
    createWatchlist,
    updateWatchlist,
    deleteWatchlist
}