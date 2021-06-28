const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const {DATABASE_LOCAL} = require('./keys')
require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))

// db
mongoose.connect(DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
        console.log("connected to mongoDB...")
})

mongoose.connection.on('error', (err) => {
        console.log("error connecting...", err)
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})