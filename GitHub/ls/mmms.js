$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    
    let scrollPoz = $(window).scrollTop()
    
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPoz = $(this).scrollTop();
        
        if(scrollPoz > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }
        
        
    });
    
    
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
    nav.removeClass("show");
        
      
    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    
    
        
    $("html, body").animate({
        scrollTop: elementOffset - 70
    }, 700);
    
    });
    
    
    
    
    /* NAVTOGGLE */
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    })
    
    /* RIWES */
    
    let slider = $("#riwesSlider");
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false,
        dots:true
    });
    
    
});








