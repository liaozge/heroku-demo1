var express = require('express')

var app = express()

app.get('/',(req,res)=>{
    res.send("hello heroku app ")
})

app.listen(process.env.PORT||3000)
//app.listen(3000,()=>{console.log("servers start...port:3000")})
