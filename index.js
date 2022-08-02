const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const {connectDB} = require('./backend/config/db')
const port = process.env.PORT || 5000


connectDB();


const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static('./frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'frontend/'}),
);

app.use('/api/user', require('./backend/routes/userRoutes'))
app.use('/api/employee', require('./backend/routes/employeeRoutes'))



app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))