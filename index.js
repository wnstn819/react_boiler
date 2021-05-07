const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://king:1234@boiler.iy6c9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( ()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

// id = king password = 1234



app.get('/',(req,res) => res.send('Hello World!! ~~ 안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))