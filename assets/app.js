/* Bootstrap 3.3.6 provides dropdowns, navbar collapse, FAQ and carousel. */
(function ($) {
  'use strict';
  $('.navbar-nav a[href^="#"]').not('[data-toggle]').on('click', function () {
    if ($('.navbar-toggle').is(':visible')) $('#navigation').collapse('hide');
  });
  $('#reviews').on('slid.bs.carousel', function () {
    $(this).find('.item').attr('aria-hidden', 'true');
    $(this).find('.item.active').attr('aria-hidden', 'false');
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
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

  // Initialize Venobox
  $(window).on('load', function() {
    $('.venobox').venobox({
      bgcolor: '',
      overlayColor: 'rgba(6, 12, 34, 0.85)',
      closeBackground: '',
      closeColor: '#fff',
      share: false
    });
  });
  
})(jQuery);
