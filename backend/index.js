const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const {connectDB} = require('./config/db')
const port = process.env.PORT || 5000
const cors = require('cors')


connectDB();

const module = require('path');

  app.use(express.static('public'));
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/employee', require('./routes/employeeRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))