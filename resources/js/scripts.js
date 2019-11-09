$(document).ready(function() {

    /* For the sticky nav */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Smooth scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });

    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round')
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round')
            icon.removeClass('ion-close-round')
        }
    });

});