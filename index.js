const express = require('express')
const bodyParser = require('body-parser')
var user =require('./models/user')
const db=require('./sequelize')
var bcrypt = require('bcrypt')

const app = express()
app.use(bodyParser.json())
const userRoutes=require('./routes/user_routes');
app.use('/user',userRoutes);
const todoRoutes=require('./routes/todo_routes');
app.use('/todo',todoRoutes);

const port = 9000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})