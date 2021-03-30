$(document).ready(function () {
    $(".navbar-nav li").click(function () { 
        $(this).addClass("active").siblings().removeClass("active");
        
    });

    // Owe Js
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots:false,
        margin:60,
        items:5,
        autoplay:true,
        autoWidth:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
            }}
       
        
    })
    


  
    $(window).scroll(function () { 
        var scrollPosition=$(this).scrollTop();
        
        // Menu Fixed
        if(scrollPosition>100){
            $("body").addClass("menu-fixed")
        }else{
            $("body").removeClass("menu-fixed")
        }
       
    });


    $(".navbar-nav li a[href^='#']").click(function (e) { 
        
        var target=this.hash;

           
    });

    $(".search").hide()
    $(".header-menu-icon").click(function () { 
        $(".search").fadeToggle()
        
    });
});




// Mixit Up js
var container=document.querySelector('.gallery');   
var mixer = mixitup(container,{
  selectors:{
    control:'[our-mix-control]'
  }
})



//   Scroll Top 
function scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  $("#scrolltop").hide()
  $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      if (scrollPosition < 500) {
          $("#scrolltop").fadeOut()
      } else {
          $("#scrolltop").fadeIn()
      }

  });