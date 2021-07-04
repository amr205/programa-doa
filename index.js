const express = require("express")
const app = express()
const port = (process.env.PORT || '4300')


app.get("/",(req,res)=>{
    res.send("Hola mi nombre es alex")
})

app.listen(port)