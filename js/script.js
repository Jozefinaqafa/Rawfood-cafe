$(document).ready(function(){

    // Link "See Menu" button to menu section
    $("#see-menu").click(function(){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top - 75
        }, 1000);
    });
// link nav item to home section
    $("#nav-home").click(function(){
        $('html, body').animate({
            scrollTop: $("#header").offset().top - 75
        }, 1000);
    });

    // link nav item menu  to menu section 
    $("#nav-menu").click(function(){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top - 75
        }, 1000);
    });

    // link nav item gallery to callery section 
    $("#nav-gallery").click(function(){
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top - 75
        }, 1000);
    });

    // link nav item contact to contact section
    $("#nav-contact").click(function(){  
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 75
        }, 1000);
    });

    // end navigation 


    // when you click the image popup image appears
    $("#gallery .row div img").click(function(){
        $("#popup-window .gallery-item img").attr("src", $(this).attr("src"));

        $("#popup-window").css('display', 'flex');
        $("#popup-window .gallery-item").css('display', 'block');
    });
// end of gallery 


    // Show "Smoothies & Juices" menu
    $("#smoothies-and-juices").click(function(){
        $("#popup-window").css('display', 'flex');
        $("#popup-window .smoothies-and-juices").css('display', 'block');
    });

    // Show "Bars & Cakes" menu
    $("#bars-and-cakes").click(function(){
        $("#popup-window").css('display', 'flex');
        $("#popup-window .bars-and-cakes").css('display', 'block');
    });

    // Show "Collagen Protein" menu
    $("#collagen-protein").click(function(){
        $("#popup-window").css('display', 'flex');
        $("#popup-window .collagen-protein").css('display', 'block');
    });

    $("#salads").click(function(){
        $("#popup-window").css('display', 'flex');
        $("#popup-window .salads").css('display', 'block');
    });

    
    // Close menu
    $(".close").click(function(){
        $("#popup-window").css('display', 'none');
        $("#popup-window div").css('display', 'none');
    });

});
    // 
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}