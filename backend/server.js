const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {notFound,errorHandler} = require('./middleware/errorMiddleware')
require('dotenv').config()
//connect mongodb
const DB = process.env.DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log('Mongodb connected')
})

//routes
const userRouter = require('./routes/users')

//middleware
app.use(express.json())

//middleware for routes
app.use('/api',userRouter)

//error handler
app.use(notFound)
app.use(errorHandler)
const port = process.env.PORT ||5000
//server listen
app.listen(port, () => {
    console.log(`Server is running ${port}`)
})