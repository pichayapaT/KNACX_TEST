const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public'))) 

app.use('/', require('./routes/myrouter'))

app.listen(1000,()=>{
    console.log("start server port 1000")
})