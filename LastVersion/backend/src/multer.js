const multer = require('multer')
const config = require('./config')
const BASE_DIR = config.submitsBaseDir 

const upload = multer({ dest: BASE_DIR })

module.exports = upload