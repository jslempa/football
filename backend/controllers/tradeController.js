const Trade = require('../models/trade')

const getAllTrades = async (req, res) => {
    try {
        const trades = await Trade.find()
        res.json(trades)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTradeById = async (req, res) => {
    try {
        const { id } = req.params
        const trade = await Trade.findById(id)
        if (trade) {
            return res.json(trade)
        }
        return res.status(404).send('Trade not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createTrade = async (req, res) => {
    try {
        const trade = new Trade(req.body)
        await trade.save()
        return res.status(201).json({
            trade
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateTrade = async (req, res) => {
    try {
        let { id } = req.params
        let trade = await Trade.findByIdAndUpdate(id, req.body, {new: true})
        if (trade) {
            return res.status(200).json(trade)
        }
        throw new Error('Trade not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteTrade = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Trade.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Trade deleted')
        }
        throw new Error('Trade not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllTrades,
    getTradeById,
    createTrade,
    updateTrade,
    deleteTrade
}