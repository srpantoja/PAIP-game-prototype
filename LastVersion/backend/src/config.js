const path = require('path')
const DATA_FILES_BASE_DIR = 'data'

module.exports = {
    challengesBaseDir: path.resolve(__dirname, '..', DATA_FILES_BASE_DIR, 'challenges'),
    submitsBaseDir: path.resolve(__dirname, '..', DATA_FILES_BASE_DIR, 'submits')
}