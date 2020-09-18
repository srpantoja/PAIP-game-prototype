const Submit = require("../models/Submission")
const Challenge = require('../models/Challenge')
const submissionCodeHandler = require('../utils/SubmissionCodeHandler')
const validationHandler = require('../utils/OutputValidator')
const fileHandler = require('../utils/SubmissionFileHandler')

class SubmissionController {
    async index(req, res) {
        // TODO implement me
    }

    async show(req, res) {
        // TODO implement this
    }

    async create(req, res) {
        const { challengeId, studentId, code } = req.body
        
        const challenge = await Challenge.findById(challengeId)
        const fileName = `${challengeId}-${studentId}.py`
        const filePath = await fileHandler.create(fileName, code)

        async function handleSubmissionError(error) {
            const createdSubmission = await Submit.create({
                studentId,
                challengeId,
                code: filePath,
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
                code: filePath,
                result
            })

            res.json(createdSubmission)
        }

        submissionCodeHandler(filePath, challenge.inputFile,
            handleSubmissionError, handleSubmissionSuccess)
    }
}

module.exports = new SubmissionController()