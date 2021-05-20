const router = require('express').Router()
const studentController = require('../controllers/StudentController')

router.get("/", studentController.index)
router.post("/", studentController.create)
router.post("/login", studentController.login)

module.exports = router