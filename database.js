users = [{
    username:"myUser",
    password:"MochaJest1212",
    number: 4
}]

function getUser(username,password){
    foundUser = users.find(user=>{return user.username==username&&user.password==password})

    if(foundUser != undefined){
        return foundUser
    }else{
        return null
    }
}

module.exports.getUser = getUser