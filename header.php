<header class="header">
    <form action="index.php" onsubmit="return search_product();">
        <input class="products_search" type="text" value="" placeholder="Search for Products..." />
        <button class="search_button" id="search_button">
            <img src="images/search_button.png" width="34" height="33" />
        </button>
        <!-- <span style="color:white;float:right;line-height:40px;" class="cart_items">0&nbsp<img style="float:right;" src="images/cart.jpg" width="40" height="40" /></span> -->
    </form>
</header>

<section class="main">
    <div class="left"></div>
    <div class="center">
        <a class="website_logo" href="index.php"><img src="images/website_logo.png" /></a>
        <!--LOGIN & REGISTER-->
        <span class="login_div">
            <a href="javascript:void(0);" class="login">Login</a>
            |
            <a href="javascript:void(0);" class="register">Register</a>
        </span>
        <!--LOGIN & REGISTER-->
    </div>
    <div class="right"></div>
</section>
<script src="js/index.js"></script>
<script src="js/header.js"></script>