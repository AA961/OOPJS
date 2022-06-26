function addUser(email, password) {
        this.email = email,
        this.password = password
}
function AdminUser(email,password){
    addUser.call(this,email,password)
    this.userType = "admin"
}

AdminUser.prototype = Object.create(addUser.prototype)

addUser.prototype.resetPassword = function (newPass) {
    this.password = newPass
}

let user1 = new AdminUser("Ambbd@gmail.com","ACSD")
console.log(user1)
user1.resetPassword("ABCC")
console.log(user1)

