const router = require('express').Router()
const studentRoutes = require('./StudentRouter')
const challengeRoutes = require('./ChallengeRouter')
const submitRoutes = require('./SubmissionRouter')

router.use('/students', studentRoutes)
router.use('/challenges', challengeRoutes)
router.use('/submit', submitRoutes)

module.exports = router