const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

// mongoose
mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// cors TODO: move to another file
app.use((request, response, next) => {
    response.set('Access-Control-Allow-Origin', request.get('Origin'));

    if (request.method == 'OPTIONS') {
        // preflight
        response.set('Access-Control-Allow-Methods', request.get('Access-Control-Request-Method'));
        response.set('Access-Control-Allow-Headers', request.get('Access-Control-Request-Headers'));
    }

    next();
});

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(8000);