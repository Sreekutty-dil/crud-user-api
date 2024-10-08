const express = require('express')
const { StatusCodes } = require('http-status-codes')

// config settings to access env variables
require('dotenv').config()

// import db config method
const connectDb = require('./db/dbConfig')

const PORT = process.env.PORT

const app = express()

// body parser config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// index route
app.get(`/` , (req, res) => {
    return res.status(StatusCodes.OK).json({ status: true , msg: `crud user api`})
})

// api route
app.use(`/api/user` , require('./route/userRouter'))

// default route
app.all(`*` , async (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({ status: false , msg: ` requested path not found`})
})

app.listen(PORT,() => {
    if(process.env.MODE === "development") {
        connectDb(process.env.MONGO_DEV)
    }
    if(process.env.MODE === "production") {
        connectDb(process.env.MONGO_PROD)
    }
    console.log(`server is connected running @ http://localhost:${PORT}`)  
})
