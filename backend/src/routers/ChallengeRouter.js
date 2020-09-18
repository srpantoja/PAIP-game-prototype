const router = require('express').Router()
const challengeController = require('../controllers/ChallengeController')

router.get("/", challengeController.index)
router.post("/", challengeController.create)

module.exports = router