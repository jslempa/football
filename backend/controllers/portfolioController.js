const Portfolio = require('../models/portfolio')

const getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find()
        res.json(portfolios)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPortfolioById = async (req, res) => {
    try {
        const { id } = req.params
        const portfolio = await Portfolio.findById(id)
        if (portfolio) {
            return res.json(portfolio)
        }
        return res.status(404).send('Portfolio not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPortfolioByUser = async (req, res) => {
    try {
        const { userID } = req.params
        const portfolio = await Portfolio.find({ user: userID})
        if (portfolio) {
            return res.json(portfolio)
        }
        return res.status(404).send('Portfolio not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createPortfolio = async (req, res) => {
    try {
        const portfolio = new Portfolio(req.body)
        await portfolio.save()
        return res.status(201).json({
            portfolio
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updatePortfolio = async (req, res) => {
    try {
        let { id } = req.params
        let portfolio = await Portfolio.findByIdAndUpdate(id, req.body, {new: true})
        if (portfolio) {
            return res.status(200).json(portfolio)
        }
        throw new Error('Portfolio not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deletePortfolio = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Portfolio.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Portfolio deleted')
        }
        throw new Error('Portfolio not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPortfolios,
    getPortfolioById,
    getPortfolioByUser,
    createPortfolio,
    updatePortfolio,
    deletePortfolio
}