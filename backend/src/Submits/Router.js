const router = require('express').Router()
const submitController = require('./Controller')
const uploadMiddleware = require('../multer')

router.get("/", submitController.index)
router.post("/", uploadMiddleware.single("code"), submitController.create)

module.exports = router