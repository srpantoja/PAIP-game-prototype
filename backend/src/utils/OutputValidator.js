const fs = require('fs').promises

async function validateOutput(output, expectedOutput) {
    return output == expectedOutput
}

module.exports = validateOutput