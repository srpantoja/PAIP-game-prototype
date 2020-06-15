const Challenge = require("./Model")
const fileHandler = require('./Files')

class Controller {
    async index(req, res) {
        const challenges = await Challenge.find({})

        res.json(challenges)
    }

    async show(req, res) {
        // TODO implement this
    }

    async create(req, res) {
        const { name, area, description, input, output } = req.body
    
        const inputFile = await fileHandler.create(name + "-input.txt", input)
        const outputFile = await fileHandler.create(name + "-output.txt", output)
        
        const createdChallenge = 
            await Challenge.create({ name, area, description, inputFile, outputFile })

        res.json(createdChallenge)
    }
}

module.exports = new Controller()