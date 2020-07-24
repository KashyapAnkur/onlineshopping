let search_button = document.querySelector("#search_button");
let products_search = document.querySelector(".products_search");
let slider_images = document.querySelectorAll(".slider_images");
let slider_div = document.querySelectorAll(".slider_div");
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// slider_images.src = "images/products/p2.jpg";
let moveToLeft = 0;

//timer to change the image
/*let t = setTimeout(function(){
    //timer to move the image to the left
    let t2 = setInterval(function(){
        moveToLeft -= 20;
        slider_images[0].style.left = moveToLeft + "px";
        slider_images[1].style.left = moveToLeft + "px";
        slider_images[1].style.display = "block";
    },20);
    console.log(t);
    function stop(){
        t2 = 0;
        clearInterval(t2);
        stop2();
    }
    
    //timer to move the image to the left
},2000);function stop2(){
    clearInterval(t);
    t = 0;
}*/
//timer to change the image

search_product = () => {
    if (products_search.value.length < 1){
        return false;
    } else if( /^[ ]+$/.test(products_search.value) ) {
        return false;
    } else {
        return true;
    }        
}

function closeBox(){
    document.querySelector(".loginRegister").style.display = "none";
}

//Login
function validateLogin(){
    let login_fields = document.querySelectorAll(".login_fields");
    let login_error_label = document.querySelectorAll(".login_error_label");

    if (login_fields[0].value.length < 1 || /^[ ]+$/.test(login_fields[0].value)){
        login_error_label[0].style.display = "block";
        login_error_label[0].innerHTML = "Please Enter Email ID";
        return false;
    } else if(!emailRegex.test(login_fields[0].value)){
        login_error_label[0].style.display = "block";
        login_error_label[0].innerHTML = "Please Enter Valid Email";
        return false;
    } else if (login_fields[1].value.length < 1 || /^[ ]+$/.test(login_fields[1].value)){
        login_error_label[1].style.display = "block";
        login_error_label[0].style.display = "none";
        login_error_label[1].innerHTML = "Please Enter Password";
        return false;
    } else {
        login_error_label[0].style.display = "none";
        login_error_label[1].style.display = "none";
        console.log("Username and password check");
        return true;
    }
}


//Registration
function validateRegistration(){
    let register_fields = document.querySelectorAll(".register_fields");
    let register_error_label = document.querySelectorAll(".register_error_label");

    if (register_fields[0].value.length < 1 ){
        register_error_label[0].style.display = "block";
        register_error_label[0].innerHTML = "Please Enter First Name";
        return false;
    } else if(register_fields[1].value.length < 1){
        register_error_label[1].style.display = "block";
        register_error_label[0].style.display = "none";
        register_error_label[1].innerHTML = "Please Enter Last Name";
        return false;
    } else if (register_fields[2].value.length < 1 || /^[ ]+$/.test(register_fields[2].value)){
        register_error_label[2].style.display = "block";
        register_error_label[1].style.display = "none";
        register_error_label[0].style.display = "none";
        register_error_label[2].innerHTML = "Please Enter Email ID";
        return false;
    } else if(!emailRegex.test(register_fields[2].value)){
        register_error_label[2].style.display = "block";
        register_error_label[1].style.display = "none";
        register_error_label[0].style.display = "none";
        register_error_label[2].innerHTML = "Please Enter Valid Email";
        return false;
    } else if (register_fields[3].value.length < 1 || /^[ ]+$/.test(register_fields[3].value)){
        register_error_label[3].style.display = "block";
        register_error_label[0].style.display = "none";
        register_error_label[1].style.display = "none";
        register_error_label[2].style.display = "none";
        register_error_label[3].innerHTML = "Please Enter Password";
        return false;
    } else {
        register_error_label[0].style.display = "none";
        register_error_label[1].style.display = "none";
        register_error_label[2].style.display = "none";
        register_error_label[3].style.display = "none";
        console.log("Username and password check");
        return true;
    }
}

//Forgot Password
function forgotPassword(){
    document.querySelector(".login_area").style.display = "none";
    document.querySelector(".forgotPassword_area").style.display = "block";
    document.querySelector(".forgot_password_form").style.display = "block";
}

function sendPasswordResetLink(){
    let forgot_password_fields = document.querySelector(".forgot_password_fields");
    let forgot_password_error_label = document.querySelector(".forgot_password_error_label");

    if (forgot_password_fields.value.length < 1 || /^[ ]+$/.test(forgot_password_fields.value)){
        forgot_password_error_label.style.display = "block";
        forgot_password_error_label.innerHTML = "Please Enter Email ID";
        return false;
    } else if (!emailRegex.test(forgot_password_fields.value)){
        forgot_password_error_label.style.display = "block";
        forgot_password_error_label.innerHTML = "Enter Valid Email ID";
        return false;
    } else {
        forgot_password_error_label.style.display = "block";
        forgot_password_error_label.style.color = "green";
        forgot_password_error_label.innerHTML = "Please check your Mail ID for the Reset Link";
        return false;
    }
}