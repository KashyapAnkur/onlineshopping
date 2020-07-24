<html>
    <head>
        <title>Online Shop</title>
        <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/footer.css">
        <style>

        </style>
    </head>

    <body>
        <?php include("header.php"); ?>

        <section class="slider">
            <img class="slider_images" src="images/products/p1.jpg" />
            <img style="display:none;margin-left:1570px;" class="slider_images" src="images/products/p2.jpg" />
            <img style="display:none;" class="slider_images" src="images/products/p3.jpg" />
        </section>

        <div class="loginRegister">
            <div class="login_area">
                <div class="login_form">
                    <div class="close" onclick="closeBox();">X</div>
                    <form action="index.php" onsubmit="return validateLogin();">
                        <input type="text" class="login_fields" placeholder="Enter Email ID" />
                        <label class="login_error_label"></label>
                        <input type="text" class="login_fields" placeholder="Enter Password" />
                        <label class="login_error_label"></label>
                        <button>Login</button><br/><br/>
                        <a class="forgotPassword" href="javascript:void(0);" onclick="forgotPassword();">Forgot Password?</a>
                        <br/>
                    </form>
                </div>
            </div>
            <div class="register_area">
                <div class="login_form">
                    <div class="close" onclick="closeBox();">X</div>
                    <form action="index.php" onsubmit="return validateRegistration();">
                        <input type="text" class="register_fields" placeholder="Enter First Name" />
                        <label class="register_error_label"></label>
                        <input type="text" class="register_fields" placeholder="Enter Last Name" />
                        <label class="register_error_label"></label>
                        <input type="text" class="register_fields" placeholder="Enter Email ID" />
                        <label class="register_error_label"></label>
                        <input type="text" class="register_fields" placeholder="Enter Password" />
                        <label class="register_error_label"></label>
                        <button>Register</button>
                    </form>
                </div>
            </div>

            <div class="forgotPassword_area">
                <div class="forgot_password_form">
                    <div class="close" onclick="closeBox();">X</div>
                    <form action="index.php" onsubmit="return sendPasswordResetLink();">
                        <input type="text" class="forgot_password_fields" placeholder="Enter Email ID" />
                        <label class="forgot_password_error_label"></label>
                        <button>Send Password Reset Link</button>
                    </form>
                </div>
            </div>
        </div>
        
        <section class="footer">
            <div class="footer_left"></div>
            <div class="footer_middle">
                <center>
                    <strong style="color:green;font-size:19px;">Help</strong><br /><br />
                    <a href="contact.php">Contact Us</a>
                </center>
            </div>
            <div class="footer_right"></div>
        </section>
    </body>
</html>

<script src="js/index.js"></script>