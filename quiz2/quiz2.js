let dbUsers=[{username:"q",password:"123456",name:"q",email:"b022120024"},
{username:"sam",password:"123456",name:"sam",email:"b022120028"},
{username:"cn",password:"123456",name:"cn",email:"b022120004"}]

function login(requsername,reqpassword){
    var matchUser=dbUsers.find(
        user=>user.username==requsername)
        //console.log(matchUser)
    
    if(!matchUser) return "User not found!"
    if(matchUser.password==reqpassword){
        return matchUser
    }else{
        return "Invalid password"
    } 
    
}

function register(username,password,name,email){
    dbUsers.push({
        username:username,
        password:password,
        name:name,
        email:email
    })
}

//try to login
console.log(login("q","123455"))

register("utem","password","name","email")
console.log(login("utem","password"))

