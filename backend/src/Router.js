const router = require('express').Router()
const studentRoutes = require('./Students/Router')
const challengeRoutes = require('./Challenges/Router')

router.use('/students', studentRoutes)
router.use('/challenges', challengeRoutes)

module.exports = router