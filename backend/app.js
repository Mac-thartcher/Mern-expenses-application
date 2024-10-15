const express = require('express')
const cors = require('cors')
const {readdirSync} = require('fs')
const app = express()
const {db} = require('./db/db');
require('dotenv').config()

const PORT = process.env.PORT || 3500;
// middlewares
app.use(express.json())
app.use(cors())

// routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

const server = () => {
    db();
    app.listen(PORT,() => {
        console.log('listening to port:', PORT)
    });

};

server();