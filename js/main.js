$(document).ready(function(){


	//Counter Up
		$('.counter').counterUp({
                delay: 10,
                time: 1000
        }); 
    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                },
            }
        });
    }

    // Testimonial Carousel Two
    if ($('.testimonial-carousel-two').length) {
        $('.testimonial-carousel-two').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
            }
        });
    }

    // Team Carousel
    if ($('.team-carousel').length) {
        $('.team-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 700,
            autoplay: 5000,
            navText: ['<span class="far fa-arrow-left"></span>', '<span class="far fa-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1023: {
                    items: 3
                },
                1400: {
                    items: 4
                },
            }
        });
    }

});