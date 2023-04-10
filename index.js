const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000

require('dotenv').config()
const db = process.env.mongoDBUrl

app.use(bodyParser.urlencoded({extended: false}))

mongoose
    .connect(db)
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err))

const endpoint = require('./routes/api/routes')

app.get('/', async(req,res) => {
    res.send('App live')
    
})

app.use('/api/', endpoint)

app.listen(port, () => console.log(`App runnig at port ${port}`))