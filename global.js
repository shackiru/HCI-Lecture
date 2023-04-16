var openLogin = document.getElementById("open-login-button");
var openRegister = document.getElementById("open-register-button");
var closeLogin = document.getElementById("close-login-button");
var closeRegister = document.getElementById("close-register-button");
var gotoLogin = document.getElementById("go-to-login");
var gotoRegister = document.getElementById("go-to-register");

var pop_up_container = document.getElementById("pop-up-container");
var login_pop_up = document.getElementById("login-pop-up");
var register_pop_up = document.getElementById("register-pop-up");

openLogin.onclick = function(){
    pop_up_container.style.display = "flex"
    login_pop_up.style.display = "flex"
}

closeLogin.onclick = function(){
    pop_up_container.style.display = "none"
    login_pop_up.style.display = "none"
}

openRegister.onclick = function(){
    pop_up_container.style.display = "flex"
    register_pop_up.style.display = "flex"
}

closeRegister.onclick = function(){
    pop_up_container.style.display = "none"
    register_pop_up.style.display = "none"
}

gotoLogin.onclick = function(){
    register_pop_up.style.display = "none"
    login_pop_up.style.display = "flex"
}

gotoRegister.onclick = function(){
    register_pop_up.style.display = "flex"
    login_pop_up.style.display = "none"
}