const Student = require("./Model")

class Controller {
    async index(req, res) {
        const students = await Student.find({})

        res.json(students)
    }

    async show(req, res) {
        // TODO implement this
    }

    async create(req, res) {
        const { name, gender } = req.body
        
        const createdStudent = await Student.create({ name, gender})

        res.json(createdStudent)
    }
}

module.exports = new Controller()