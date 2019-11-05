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

    // /* Scroll on buttons */
    // $('.js--scroll-to-plans').click(function() {
    //     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top - 60}, 1000)
    // })

    // $('.js--scroll-to-start').click(function() {
    //     $('html, body').animate({scrollTop: $('.js--section-features').offset().top - 60}, 500)
    // })

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

});