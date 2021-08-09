const express = require("express")
const createError = require("http-errors")

function makeApp(database){
    const app = express()
    app.use(express.json());

    app.get("/",(req,res)=>{
        res.send("Hola mi aplicacion personalizada de node")
    });
        

    app.post("/authenticate",(req,res,next)=>{
        
        username = req.body.username
        password = req.body.password

        user = database.getUser(username,password)
        
        if(user == null){
            return next(createError(404,'Usuario no encontrado'))
        }else{
            return res.json(user)
        }
    })

    return app
}


module.exports = makeApp