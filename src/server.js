const express = require('express')
const path = require('path');//commonjs
// import express from 'express';//es modules
require('dotenv').config();
console.log(">>> check env: ", process.env);
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//config static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!@nodemon')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.get('/hoidanit', (req, res) => {
    //res.send('<h1>Hoi Dan IT vs Eric </h1>')
    res.render('sample.ejs')
    //res.send('Check abc')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

