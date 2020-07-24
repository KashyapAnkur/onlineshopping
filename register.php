<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" href="css/header.css">
        <link rel="stylesheet" href="css/style.css">
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
    </body>
</html>

<script>
    let search_button = document.querySelector("#search_button");
    let products_search = document.querySelector(".products_search");
    let slider_images = document.querySelectorAll(".slider_images");
    let slider_div = document.querySelectorAll(".slider_div");
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
</script>