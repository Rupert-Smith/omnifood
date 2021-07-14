$(document).ready(function () {
  //

  /* ----------- Sticky navigation ----------- */

  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    { offset: '60px' }
  );

  /* ----------- Scroll via jQuery ----------- */

  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-plans').offset().top,
      },
      1000
    );
  });
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('.js--section-features').offset().top,
      },
      1000
    );
  });

  /* ----------- Scroll via snippet ----------- */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* ----------- Animations on scroll  ----------- */

  // $('.js-wp-1').waypoint(
  //   function (direction) {
  //     $('.js--wp-1').addClass('animated fadeIn');
  //   },
  //   { offset: '50%' }
  // );

  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    },
    {
      offset: '50%',
    }
  );
  /* ----------- Mobile Navigation  ----------- */

  // $('.js--nav-icon').click(function () {
  //   const nav = $('.js--main-nav');
  //   const icon = $('.js--nav-icon ion-icon');

  //   nav.slideToggle(200);
  //   if (icon.hasName('reorder-three-outline')) {
  //     icon.addName('close-outline');
  //     icon.removeName('reorder-three-outline');
  //   } else {
  //     icon.addName('reorder-three-outline');
  //     icon.removeName('close-outline');
  //   }
  // });

  const nav = $('.js--main-nav');

  $('.js--nav-icon').click(function () {
    const icon = $('.js--nav-icon ion-icon');
    nav.slideToggle(200);

    if (icon.hasClass('hide')) {
      icon.toggleClass('hide');
    }
  });

  $(window).resize(function () {
    const hamburger = $('.js--hamburger-icon');
    const cross = $('.js--cross-icon');
    if ($(window).width() > 767) {
      nav.css('display', 'block');
      hamburger.removeClass('hide');
      cross.addClass('hide');
    } else {
      nav.css('display', 'none');
    }
  });
});
