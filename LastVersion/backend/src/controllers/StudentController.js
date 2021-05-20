const Student = require("../models/Student")
const bcrypt = require('bcrypt');

class StudentController {
    async index(req, res) {
        const students = await Student.find({})

        res.json(students)
    }

    async login(req, res) {
        const { login, password } = req.body

        const isLoginUsed = await Student.exists({ login })

        //Autenticação de login
        if (isLoginUsed) { 
            const student = await Student.findOne({ login })
            const passwordMatch = await bcrypt.compare(password, student.password)

           //Autenticação de senha 
            if (passwordMatch) {
                res.json({"status": "Sucesso!", "studentId": student._id, "name": student.login})
            } else {
                res.status(401).json({"status": "Senha incorreta."})
            }
        } else {
            res.status(400).json({status: "Login inexistente."})
        }
    }
    //Cadastro
    async create(req, res) {
        const { gender, login, password, curso } = req.body
        
        const isLoginUsed = await Student.exists({ login })

        if (isLoginUsed) {
            res.status(400).json({"status": "Já existe um usuário cadastrado com esse login."})
        } else {
            const passwordHash = await bcrypt.hash(password, 10)
            const createdStudent = await Student.create({ gender, login, password: passwordHash, curso })
    
            res.json({id: createdStudent.id, login: createdStudent.login, gender: createdStudent.gender, curso: createdStudent.curso})
        }
    }
}

module.exports = new StudentController()