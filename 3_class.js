let userForum = document.querySelector("#newUser");
let fName = document.querySelector("#FName");
let lName = document.querySelector("#LName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let resetForum = document.querySelector("#reset")
let oldPassword = document.querySelector("#oldPass");
let newPassword = document.querySelector("#newPass")


class addUser {
    fName;
    lName;
    email;
    password;

    constructor(fName, lName, email, password) {
        this.fName = fName,
            this.lName = lName,
            this.email = email,
            this.password = password
    }

    resetPassword(newPass) {
        this.password = newPass

    }

}


const users = []

userForum.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = new addUser(fName.value, lName.value, email.value, password.value)
    users.push(user)
    console.log(users)
    userForum.reset();
})

resetForum.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = users.find((user) => user.password === oldPassword.value)

    user.resetPassword(newPassword.value)
    console.log(users)
    resetForum.reset();

})