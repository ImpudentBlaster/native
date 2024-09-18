const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = 8000;
const userRoutes = require('./Routes/user-routes')
const cors = require('cors')
const todoRoutes = require('./Routes/todo-routes')


app.use(cors({
    origin: '*', // Allows all origins (you can specify the frontend URL instead)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));
app.use(express.json())
app.get('/', (req, res) => {
    res.send("home")
})
app.use('/', userRoutes)
app.use('/' , todoRoutes)

mongoose.connect('mongodb+srv://sagarsharmatechies:sagarsharmatechies@democluster.dlxyrkz.mongodb.net/nativeProject')
    .then(() => {
        app.listen(port, (req, res) => {
            console.log("server is live")
        })
    }).catch(err => console.log(err.message))

