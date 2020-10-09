const Challenge = require("../models/Challenge")
const fileHandler = require('../utils/ChallengeFileHandler')

class ChallengeController {
    async index(req, res) {
        const challenges = await Challenge.find({})

        res.json(challenges)
    }

    async show(req, res) {
        // TODO implement this
    }

    async create(req, res) {
        /*Criação de questões - nome, area, coordenadas, descrição, 
        texto de entrada e saída.*/

        const { name, area, posX, posY, description, input, output } = req.body

        const createdChallenge = 
            await Challenge.create({ name, area, description, posX, posY, input, output })

        res.json(createdChallenge)
    }
}

module.exports = new ChallengeController()