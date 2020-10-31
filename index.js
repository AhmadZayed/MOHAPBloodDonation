
(function($) { "use strict";



//Menu On Hover

$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});

})(jQuery);
$(document).ready(function() {

//Start slider
  $('#my-carousel').on('initialized.owl.carousel', function() {
$('.navigator').eq(0).addClass('active');
console.log('initialized');
});

$('#my-carousel').owlCarousel({
loop : true,
autoplay : true,
autoplayTimeout : 3000,
nav : true,
navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
singleItem: true,
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});

$('#my-carousel').on('changed.owl.carousel', function(ev) {
var item_index = ev.page.index;
$('.navigator').removeClass('active').eq(item_index).addClass('active');
});

$('.navigator').on('click', function() {
var item_no = $(this).data('item');
$('#my-carousel').trigger('to.owl.carousel', [item_no, 1000, true]);
});
});
//End slider

(function () {
    feather.replace();
    let activeItem = 0;
    const items = document.getElementsByClassName('navigation__item');
    const separator = document.querySelector('.navigation__separator');
    Array.from(items).forEach((item, index) => {
      item.addEventListener('click', e => {
        if (index === activeItem) {
          console.log(activeItem);
          return;
        }
        activeItem = index;
        document.querySelector('.navigation__item.active').classList.remove('active');
        items[index].classList.add('active');
        separator.style.transform = `translateY(${54 * activeItem}px)`;
      });
    });
  })();

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
                    margin: 42,
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