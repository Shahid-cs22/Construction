/*-----------------------------------------------------------------------------------

    Template Name: Builty



    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    Js INDEX

    ===================

    ## Counter Style One
    ## Project Style One
    ## Team Slider
    ## Featured Slider One
    ## Client Slider
    ## Client Review Slider
    ## C-Slider
    ## Blog-Slider
    ## Nice Select
    ## P-Slider
    ## Featured Slider Two
    ## Scroll Top  +  Timeline
    ## Contact Us
    ## Products List Grid
    ## Animation on scroll
    ## What we build
    ## PD Gallery
    ## Cart Popup
    ## Preloader
    ## Sticky Header
    ## Location Map Pin


-----------------------------------------------------------------------------------*/



jQuery(document).ready(function ($) {



    "use strict";

    

    // Counter Style One
    if ($(".counter")[0]){
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Project Style One
    if ($(".project-slider.owl-carousel")[0]){
        $('.project-slider.owl-carousel').owlCarousel({
            items:2,
            margin:12,
            dots:true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            responsive:{
                0:{
                    items:1,
                    dots: false
                },
                425:{
                    items:1
                },
                1050:{
                    items:2
                }
            }
        });
    }

    // Team Slider
    if ($(".team-slider")[0]){
        $('.team-slider.owl-carousel').owlCarousel({
            items:3,
            loop: true,
            nav:true,
            navText: ["<i class='fa-solid fa-angles-left'></i>","<i class='fa-solid fa-angles-right'></i>"],
            dots: false,
            touchDrag  : false,
            mouseDrag  : false,
            center: true,
            stagePadding: 50,
            margin: 10,
            navContainer: '.team-slider-nav',
            responsive:{
                0:{
                    items:1
                },
                1030:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });
        // Go to the next item
        var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
        (x).addClass('open');
        $('.team-slider-nav .owl-next').click(function() {
            $('.team-slider .owl-item.active.open').removeClass('open');
            var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
            (x).addClass('open');
            console.log("Nextt");
        })
        // Go to the previous item
        $('.team-slider-nav .owl-prev').click(function() {
            $('.team-slider .owl-item.active.open').removeClass('open');
            var x = $('.team-slider .owl-stage').children('.team-slider .owl-item.active').eq(0);
            (x).addClass('open');
            console.log("Prev");
        })
    }

    // Featured Slider One
    if ($(".f-slider-one")[0]){
        $('.f-slider-one.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            margin:0,
            stagePadding: 0,
            nav:true,
            navText: ["<button><i class='fa-solid fa-angles-left'></i></button>","<button><i class='fa-solid fa-angles-right'></i></button>"],
            dots: false,
            animateOut: 'fadeOut',
            touchDrag  : false,
            mouseDrag  : false
        });
    }

    // Client Slider
    if ($(".client-slider")[0]){
        $('.client-slider.owl-carousel').owlCarousel({
            items:5,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    }

    // Client Review Slider
    if ($(".client-review-slider")[0]){
        $('.client-review-slider.owl-carousel').owlCarousel({
            items:1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            dots: true,
        });
    }

    // C-Slider
    if ($(".c-slider")[0]){
        $('.c-slider.owl-carousel').owlCarousel({
            loop: true,
            items:1,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            nav:true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive:{
                0:{
                    nav: false,
                },
                768:{
                    nav: true
                }
            }
        });
    }

    // Blog-Slider
    if ($(".blog-slider")[0]){
        $('.blog-slider.owl-carousel').owlCarousel({
            items:3,
            center: true,
            loop: true,
            margin:12,
            dots:true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    center: false,
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    }

    // Nice Select
    if ($("select")[0]){
        $('select').niceSelect();
    }

    // P-Slider
    if ($(".p-slider.owl-carousel")[0]){
        $('.p-slider.owl-carousel').owlCarousel({
            items:3,
            loop: true,
            center: true,
            // dots:true,
            // autoplay: true,
            // autoplayTimeout: 3000,
            // autoplayHoverPause: false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    center: false,
                    items:2,
                },
                1100:{
                    items:3
                }
            }
        });
    }

    // Team Slider
    if ($(".prj-slider")[0]){
        $('.prj-slider.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            nav:true,
            navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
            dots: false,
            touchDrag  : false,
            mouseDrag  : false,
            center: true,
            margin: 10,
            navContainer: '.prj-slider-nav',
            animateOut: 'fadeOut'
        });
    }

    // Featured Slider Two
    if ($(".f-2-slider")[0]){
        $('.f-2-slider.owl-carousel').owlCarousel({
            items:1,
            loop: true,
            nav:true,
            navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
            dots: false,
            touchDrag  : false,
            mouseDrag  : false,
            margin: 10,
            navContainer: '.f-2-s-nav',
        });
    }

    // Project Detail Slider
    if ($(".p-d-slider")[0]){
        $('.p-d-slider.owl-carousel').owlCarousel({
            items:1,
            dots:true,
        });
    }

    // Scroll Top  +  Timeline
    window.onscroll = function(){
        var num = window.pageYOffset;
        $('#timeline').waypoint(function() {
            $(".fill").css("height", num);
        }, {
            offset: '100%'
        });
        if (num >= 160){
          document.querySelector('#scrollTop').classList.add('active');
        }
          else {
            document.querySelector('#scrollTop').classList.remove('active');
        }
    }
      // // Just add #scrollTop to the footer
    document.querySelector('#scrollTop').addEventListener('click', function(){
      window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    // Contact Us
    $(".contact-us .c-data ul li").click(function(){
        $(".contact-us .c-data a").removeClass("active");
        $(this).children("a").addClass("active");

        var m_index = $(this).index();


        if ( m_index == 0) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(1)")).addClass("active");
            console.log("yes")
        };
        if ( m_index == 1) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(2)")).addClass("active");
            console.log("yes")
        };
        if ( m_index == 2) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(3)")).addClass("active");
            console.log("yes")
        };
        if ( m_index == 3) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(4)")).addClass("active");
            console.log("yes")
        };
        if ( m_index == 4) {
            $(".c-cards .card").removeClass("active")
            $($(".c-cards .card:nth-child(5)")).addClass("active");
            console.log("yes")
        };
    }); 

    if ($(".blog-posts.grid")[0]){
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
          itemSelector: '.grid-item',
          gutter: 70,
        });
    }


    // Products List Grid
    if ($(".shop-filter")[0]){
        $(".shop-filter a.list").click(function(){
          $(".p-slider").removeClass("grid");
          $(".p-slider").addClass("list");
        });

        $(".shop-filter a.grid").click(function(){
          $(".p-slider").removeClass("list");
          $(".p-slider").addClass("grid");
        });
    }

    // Animation on scroll
    AOS.init({
      once: true,
    });

    // What we build
    $(".wwb-ul li").hover(function(){
      $(".wwb-ul li").removeClass("active");
      $(this).addClass("active");
    });

    $('.mobile-nav .menu-item-has-children').on('click', function(event) {
      $(this).toggleClass('active');
      event.stopPropagation();
    }); 

    $('#mobile-menu').click(function(){
        $(this).toggleClass('open');
        $('#mobile-nav').toggleClass('open');
    });

    $('#desktop-menu').click(function(){
        $(this).toggleClass('open');
        $('.desktop-menu').toggleClass('open');
    });

    $('#res-cross').click(function(){
        $('#mobile-nav').removeClass('open');
        $('#mobile-menu').removeClass('open')
    });

    // PD Gallery
    $('.li-pd-imgs').on('click', function() {

      var img_src = "";

      $('.li-pd-imgs.nav-active').removeClass('nav-active');

      $(this).addClass('nav-active');

      img_src = $(this).find('img').attr('src');

      $('#NZoomContainer').children('img').attr('src', img_src);

    });

    

    // Preloader
    // if ($("body")[0]){
    //     $(window).on('load', function () {
    //         $('#preloader').css("display", "none");
    //         console.log("yes")
    //     });
    // }

    

    // Cart Popup
    if ($(".pr-cart")[0]){
       $('.pr-cart').on('click', function() {
          $('.cart-popup').toggleClass('show-cart');
       });
    }

    // Location Map Pin
    if ($(".map-pin")[0]){
       $('.map-pin').on('mouseover', function() {
          $('.map-pin').toggleClass('active');
          console.log("yes")
       });
    }

    // Sticky Header
    var new_scroll_position = 0;

        var last_scroll_position;

        var header = document.getElementById("stickyHeader");



        window.addEventListener('scroll', function(e) {

        last_scroll_position = window.scrollY;



        // Scrolling down

        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {

          // header.removeClass('slideDown').addClass('slideUp');

          header.classList.remove("slideDown");

          header.classList.add("slideUp");



        // Scroll top

        } 

        else if (last_scroll_position < 100) {

          header.classList.remove("slideDown");

        } 

        else if (new_scroll_position > last_scroll_position) {

          header.classList.remove("slideUp");

          header.classList.add("slideDown");

        }



          new_scroll_position = last_scroll_position;

        });

});


// theme-icon/moon
let lightmode = localStorage.getItem('light-d');
    const lightmodeToggle = document.querySelector('#theme-icon');
    const enableLightMode = () => {
        document.body.classList.add('light-d');
        localStorage.setItem('light-d', 'enabled');
        lightmodeToggle.src = 'assets/images/moon.png';
    }
    
    const disablelightmode = () => {
        document.body.classList.remove('light-d');
        localStorage.setItem('light-d', null);
        lightmodeToggle.src = 'assets/images/sun.png';
    }

    if (lightmode === 'enabled') {
        enableLightMode();
    }

    lightmodeToggle.addEventListener('click', () => {
        lightmode = localStorage.getItem('light-d'); 

        if (lightmode !== 'enabled') {
            enableLightMode();
        } else {  
            disablelightmode();
        }
    });


    // Preloader
$(window).on('load', function () {
    $("body").addClass("page-loaded");
    console.log("loaded")
});