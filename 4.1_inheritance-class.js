class addUser {
    email;
    password;


    constructor(email, password) {
        this.email = email,
            this.password = password
    }

    resetPassword(oldPass, newPass) {
        if (oldPass == this.password) {
            this.password = newPass
        }else{
            console.log("Wrong Password")
        }
    }

}

class AdminUser extends addUser{
    accountType = "Admin Account";

    constructor(email,password){
        super(email,password)
    }

    changeAccountType(newType){
        this.accountType = newType
    }
}

let user1 = new AdminUser("abubakerahmed282@gmail.com","Qureshi786")
console.log(user1)
user1.resetPassword("Qureshi786","aamm786a")
console.log(user1)
user1.changeAccountType("Administrator Account")
console.log(user1)