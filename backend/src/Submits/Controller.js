const Submit = require("./Model")
const Challenge = require('../Challenges/Model')
const submissionCodeHandler = require('./InvokeSubmission')
const validationHandler = require('./ValidateOutput')

class Controller {
    async index(req, res) {
        // TODO implement me
    }

    async show(req, res) {
        // TODO implement this
    }

    async create(req, res) {
        console.log(req.file)
        const { data } = req.body        
        console.log(data)
        const { challengeId, studentId } = JSON.parse(data)
        
        const challenge = await Challenge.findById(challengeId)

        async function handleSubmissionError(error) {
            const createdSubmission = await Submit.create({
                studentId,
                challengeId,
                code: req.file.path,
                result: false
            })

            res.json(createdSubmission)
        }

        async function handleSubmissionSuccess(success) {
            // check challenge output
            const result = await validationHandler(success, challenge.outputFile)
            const createdSubmission = await Submit.create({
                studentId,
                challengeId,
                code: req.file.path,
                result
            })

            res.json(createdSubmission)
        }

        submissionCodeHandler(req.file.path, challenge.inputFile,
            handleSubmissionError, handleSubmissionSuccess)
    }
}

module.exports = new Controller()