class addUser {
    email;
    #password;


    constructor(email, password) {
        this.email = email,
            this.#password = password
    }
    
    #successChange(){
        console.log("Changed Successfully")
    }
    resetpassword(oldPass, newPass) {
        if (oldPass == this.#password) {
            this.#password = newPass
            this.#successChange()
        }else{
            console.log("Wrong #password")
        }
    }
    set password(newPass){
        return this.#password = newPass
    }
    get password(){
        return this.#password
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

let user1 = new addUser("abubakerahmed282@gmail.com","Qureshi786")
user1.password = "aamm786a" 
user1.resetpassword("aamm786a","12435")
console.log(user1.password)
