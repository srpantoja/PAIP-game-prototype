const router = require('express').Router()
const studentRoutes = require('./Students/Router')
const challengeRoutes = require('./Challenges/Router')
const submitRoutes = require('./Submits/Router')

router.use('/students', studentRoutes)
router.use('/challenges', challengeRoutes)
router.use('/submit', submitRoutes)

module.exports = router