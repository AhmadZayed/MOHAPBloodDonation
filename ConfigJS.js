$(document).ready(function () {


    function initBrandsSlider() {
        if ($('.brands_slider').length) {
            var brandsSlider = $('.brands_slider');

            brandsSlider.owlCarousel(
                {
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    nav: false,
                    dots: false,
                    autoWidth: true,
                    items: 4,
                    margin: 22,
                    responsive:
                    {
                        0: { items: 1 },
                        575: { items: 2 },
                        768: { items: 3 },
                        991: { items: 4 },

                    }
                });

            if ($('.brands_prev').length) {
                var prev = $('.brands_prev');
                prev.on('click', function () {
                    brandsSlider.trigger('prev.owl.carousel');
                });
            }

            if ($('.brands_next').length) {
                var next = $('.brands_next');
                next.on('click', function () {
                    brandsSlider.trigger('next.owl.carousel');
                });
            }
        }
    }
    initBrandsSlider();
});