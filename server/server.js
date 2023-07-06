
const express = require('express');
const exetats = require('./routes/exetats');
const connectDB = require('./db/connect');
require('dotenv').config()

const app = express();

// middleware 
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Hello. just started')
})

app.use('/api/v1/exetats', exetats)

const port = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}


start()