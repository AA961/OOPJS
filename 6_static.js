class addUser {
    static id = 1;
    email;
    #password;


    constructor(email, password,id) {
        this.email = email,
            this.#password = password
        this.id = id
        this.id = addUser.id ++
    }

    #successChange() {
        console.log("Changed Successfully")
    }
    resetpassword(oldPass, newPass) {
        if (oldPass == this.#password) {
            this.#password = newPass
            this.#successChange()
        } else {
            console.log("Wrong #password")
        }
    }
    set password(newPass) {
        return this.#password = newPass
    }
    get password() {
        return this.#password
    }

    static sortUsers(user1, user2) {
        return user2.id - user1.id
    }

}

class AdminUser extends addUser {
    accountType = "Admin Account";

    constructor(email, password) {
        super(email, password)
    }

    changeAccountType(newType) {
        this.accountType = newType
    }
}

let user1 = new addUser("abubakerahmed282@gmail.com", "Qureshi786" )
let user2 = new addUser("Ammar.Ahmed961@gmail.com", "AAMM786A")

console.log(user1, user2)

let users = [user1, user2]

users.sort(addUser.sortUsers)

console.log(users)

