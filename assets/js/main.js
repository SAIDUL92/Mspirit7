$(document).ready(function() {



    $('.bxslider-active').bxSlider({
        mode: 'vertical',
        pager: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10

    });

    $('.scholar-active').bxSlider({
        mode: 'vertical',
        pager: false,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10

    });

    $('.arbitrators-slider').bxSlider({
        mode: 'vertical',
        pager: false,
        minSlides: 2,
        maxSlides: 2,
        slideMargin: 10

    });

    $('.bxslider-left-big').bxSlider({
        mode: 'vertical',
        pager: false,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        adaptiveHeight: true,
        slideMargin: 10

    });


    // owlCarousel
    $('#brand-logo').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fas fa-chevron-left"> </i>', '<i class="fas fa-chevron-right"> </i>'],
        nav: true,

        padding: 20,
        dots: false,
        responsive: {
            0: {
                items: 1
            },

            576: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });


});