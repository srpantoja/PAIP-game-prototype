const router = require('express').Router()
const challengeController = require('./Controller')

router.get("/", challengeController.index)
router.post("/", challengeController.create)

module.exports = router