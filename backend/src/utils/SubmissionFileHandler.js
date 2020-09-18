const fs = require('fs').promises
const config = require('../config')
const BASE_DIR = config.challengesBaseDir

fs.mkdir(BASE_DIR, { recursive: true })

class ChallengesFileHandler {
    async create(filename, data) {
        const path = `${BASE_DIR}/${filename}`
        const fileHandle = await fs.open(path, "w")
        fileHandle.writeFile(data)
        fileHandle.close()

        return path
    }
}

module.exports = new ChallengesFileHandler()