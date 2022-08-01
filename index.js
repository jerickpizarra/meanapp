const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const {connectDB} = require('./backend/config/db')
const port = process.env.PORT || 5000
const cors = require('cors')


connectDB();


const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// const module = require('path');

// app.use(express.static(__dirname + "/dist"))

app.use(express.static('./backend/public'));


app.use('/api/user', require('./backend/routes/userRoutes'))
app.use('/api/employee', require('./backend/routes/employeeRoutes'))

app.get('*',(req,res)=>{
    res.sendFile(path.join('./backend/public/index.html'));
})

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))