function validatePassord(password){
    if (password == "" || password.length < 8){
        return false
    }
    else{
        let rxUpper = /.*[A-Z].*/
        let rxLower = /.*[a-z].*/
        let rxDigit = /.*[0-9].*/
        if(rxUpper.test(password )&& rxLower.test(password) && rxDigit.test(password)){
            return true
        }else{
            return false
        }
    }
        
}

module.exports.validatePassord = validatePassord