const fs = require('fs').promises

async function validateOutput(output, expectedOutputFile) {
    const expectedOutput = await fs.readFile(expectedOutputFile, {
        encoding: "utf8"
    })

    return output == expectedOutput
}

module.exports = validateOutput