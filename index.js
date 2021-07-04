const express = require("express")
const app = express()
const port = (process.env.PORT || 4300)

app.get("/",(req,res)=>{
    res.send("Hola mi aplicacion personalizada de node")
})

app.listen(port)