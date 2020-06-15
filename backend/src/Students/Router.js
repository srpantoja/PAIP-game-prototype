const router = require('express').Router()
const studentController = require('./Controller')

router.get("/", studentController.index)
router.post("/", studentController.create)

module.exports = router