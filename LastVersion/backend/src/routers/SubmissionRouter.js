const router = require('express').Router()
const submitController = require('../controllers/SubmissionController')
const uploadMiddleware = require('../multer')

router.get("/", submitController.index)
router.post("/", submitController.create)

module.exports = router