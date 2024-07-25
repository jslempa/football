const Player = require('../models/player')

const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find()
        res.json(players)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getPlayerById = async (req, res) => {
    try {
        const { id } = req.params
        const player = await Player.findById(id)
        if (player) {
            return res.json(player)
        }
        return res.status(404).send('Player not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body)
        await player.save()
        return res.status(201).json({
            player
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updatePlayer = async (req, res) => {
    try {
        let { id } = req.params
        let player = await Player.findByIdAndUpdate(id, req.body, {new: true})
        if (player) {
            return res.status(200).json(player)
        }
        throw new Error('Player not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Player.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Player deleted')
        }
        throw new Error('Player not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer
}