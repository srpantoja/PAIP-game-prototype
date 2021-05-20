const express = require("express")

module.exports = () => {

    let app = express();

    app.set('port', 3000)

    return app
}