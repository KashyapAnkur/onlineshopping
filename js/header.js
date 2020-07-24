document.querySelector(".login").addEventListener("click", function(){
    document.querySelector(".loginRegister").style.display = "block";
    document.querySelector(".login_area").style.display = "block";
    document.querySelector(".register_area").style.display = "none";
    document.querySelector(".forgotPassword_area").style.display = "none";
    document.querySelector(".forgot_password_error_label").innerHTML = "";
    document.querySelector(".forgot_password_error_label").style.color = "red";
    document.querySelector(".forgot_password_fields").value = "";
});

document.querySelector(".register").addEventListener("click", function(){
    document.querySelector(".loginRegister").style.display = "block";
    document.querySelector(".login_area").style.display = "none";
    document.querySelector(".register_area").style.display = "block";
    document.querySelector(".forgotPassword_area").style.display = "none";
    document.querySelector(".forgot_password_error_label").innerHTML = "";
    document.querySelector(".forgot_password_error_label").style.color = "red";
    document.querySelector(".forgot_password_fields").value = "";
});
