//switch between login and register
document.addEventListener("DOMContentLoaded", () => {
    
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const switchText = document.querySelector(".no-account");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.querySelector(".login-btn");
console.log("loginForm:", loginForm);
if(loginForm){
switchText.addEventListener("click", (e) => {
    if(e.target.classList.contains("register")){
        const isLoginVisible = loginForm.style.display !== "none";

        if(isLoginVisible){
            registerForm.style.display = "block";
            loginForm.style.display = "none";
            switchText.innerHTML = `<p>Already have an account? <span class = "register">Login Here</span></p>`;
            
            console.log("Register page opened successfully");
        }
        else{
            registerForm.style.display = "none";
            loginForm.style.display = "block";
            switchText.innerHTML = `<p>Don't have an account? <span class = "register">Register Here</span></p>`;
            
            console.log("Login page opened successfully");
        }
    } 
    });


//login
     loginForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        let isValid = true;

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    const loginEmailError = document.getElementById("login-email-error");
    const loginPasswordError = document.getElementById("login-password-error");
    const confirmMessage = document.getElementById("login-message");

    loginEmailError.textContent = "";
    loginPasswordError.textContent = "";
    confirmMessage.textContent = "";

    let loginEmailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(loginEmail === ""){
            loginEmailError.textContent = "Email cannot be empty";
            isValid = false;
            console.log("Empty email");
        }else if(!loginEmailPattern.test(loginEmail)){
            loginEmailError.textContent = "Invalid Email format";
            isValid = false;
            console.log("Pattern wrong");
        }

        if(loginPassword === ""){
            loginPasswordError.textContent = "Password cannot be empty";
            isValid = false;
            console.log("Password is empty");
        }

        if(isValid){
            let userJSON = localStorage.getItem("users");
            let users = userJSON ? JSON.parse(userJSON) : [];

            //find matching users
            let matchedUsers = null;
            for(let i=0;i < users.length; i++){
                if(users[i].email === loginEmail && users[i].password === loginPassword){
                    matchedUsers = users[i];
                    break;
                }
            }

             if(matchedUsers){
                confirmMessage.textContent = "User logged in. Welcome";
                confirmMessage.style.color = "#43A047";
                confirmMessage.style.marginTop = "5px";
                confirmMessage.style.textAlign = "center";

                //save logged in user info
                localStorage.setItem("loggedInUser", JSON.stringify(matchedUsers) );

                //show logout button
                logoutBtn.style.display = "inline-block";
                loginBtn.style.display = "none";
                loginForm.reset();

                //redirect to home page after 2 sec
                setTimeout(() => {
                    window.location.href = "../index.html";
                },2000);
                console.log("login successful");
            }else{
                confirmMessage.textContent = "Incorrect password or email";
                confirmMessage.style.color = "red";
                confirmMessage.style.textAlign = "center";
            }
        }
      
    });

    // ------------------ Logout ------------------
logoutBtn.addEventListener("click", () => {
  // Clear stored user
  localStorage.removeItem("loggedInUser");

  // Show login form again
  loginBtn.style.display = "block";
  logoutBtn.style.display = "none";
  const confirmMessage = document.getElementById("login-message");
  confirmMessage.textContent = "";
    window.location.href = location.origin + location.pathname.replace(/\/[^/]*$/, "./index.html");


});

//register
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

    const regFullName = document.getElementById("reg-fullname").value;
    const regPhone = document.getElementById("reg-phonenumber").value;
    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;
    const regConfirmPassword = document.getElementById("reg-confirm-password").value;

    const regFullNameError = document.getElementById("reg-full-name-error");
    const regPhoneError = document.getElementById("reg-phone-error");
    const regEmailError = document.getElementById("reg-email-error");
    const regPasswordError = document.getElementById("reg-password-error");
    const regConfirmPasswordError = document.getElementById("reg-confirm-password-error");
    const confirmMessage = document.getElementById("reg-message");

    regFullNameError.textContent = "";
    regPhoneError.textContent = "";
    regEmailError.textContent = "";
    regPasswordError.textContent = "";
    regConfirmPasswordError.textContent = "";
    confirmMessage.textContent = "";

    if(regFullName === ""){
        regFullNameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    let regPhonePattern = /^(98)\d{8}$/;
    if(regPhone === ""){
        regPhoneError.textContent = "Phone number cannot be empty";
        isValid = false;
    }else if(!regPhonePattern.test(regPhone)){
        regPhoneError.textContent = "Invalid Phone number format";
            isValid = false;
            console.log("Pattern wrong");
    }

    let regEmailPattern = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regEmail === ""){
            regEmailError.textContent = "Email cannot be empty";
            isValid = false;
            console.log("Empty email");
        }else if(!regEmailPattern.test(regEmail)){
            regEmailError.textContent = "Invalid Email format";
            isValid = false;
            console.log("Pattern wrong");
        }

        let regPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!$#%^&*?])[a-zA-Z\d!@#$%^&*?]{8,}$/;
        if(regPassword === ""){
            regPasswordError.textContent = "Password cannot be empty";
            isValid = false;
            console.log("Password is empty");
        }else if(!regPasswordPattern.test(regPassword)){
            regPasswordError.textContent = "Invalid password format";
            isValid = false;
        }

        if(regConfirmPassword === ""){
            regConfirmPasswordError.textContent = "This field cannot be empty";
            isValid = false;

        }else if(regConfirmPassword !== regPassword){
            regConfirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        }

        if(isValid){
            //new user object
            const newUser = {
                name: regFullName,
                phone : regPhone,
                email : regEmail,
                password : regPassword
            };

            //gets existing user from local storage
            const usersJSON = localStorage.getItem("users");
            const users = usersJSON ? JSON.parse(usersJSON) : []; //if user exists, parse json string to js oject

            //check if email alrady exist
            let emailExists = false;
            for(let i=0;i< users.length ;i ++){
                if(users[i].email === newUser.email){
                    emailExists = true;
                    break;
                }
            }

            if(emailExists){
                regEmailError.textContent = "Email already registered";
                regEmailError.style.color = "red";
                return;
            }

            //save new user to local storage
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users)); //converts Js to JSON string

            confirmMessage.textContent="Registration successful";
            confirmMessage.style.color = "#43A047";
            confirmMessage.style.textAlign = "center";
            confirmMessage.style.marginTop = "5px";
            console.log("registration successful");

            registerForm.reset();

            setTimeout(() => {
                window.location.href = "./login.html";
            },2000);
        }

    });

}
});