console.log("script.js loaded");

(function ($) {
  "use strict";

  // Initialize AOS
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true
      });
    } else {
      console.warn('AOS library not loaded');
    }
  }

  // Initialize WOW.js
  function initWOW() {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    } else {
      console.warn('WOW.js library not loaded');
    }
  }

  // Spinner
  function initSpinner() {
    if ($('#spinner').length > 0) {
      setTimeout(function() {
        $('#spinner').removeClass('show');
      }, 1);
    }
  }

   // Navigation: Active nav links
   const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not([data-no-active="true"])');
   const dropdownItems = document.querySelectorAll('.navbar-nav .dropdown-item');
   const dropdownToggles = document.querySelectorAll('.navbar-nav .dropdown-toggle');

   const setActiveNav = (navItem) => {
     if (!navItem) return;
     document.querySelectorAll('.navbar-nav .nav-item').forEach(nav => nav.classList.remove('active'));
     navItem.classList.add('active');
   };

   // Helper function to check if a URL matches the current path
   const isActiveLink = (href) => {
     const currentPath = window.location.pathname.split('/').pop() || 'index.html';
     return href === currentPath || (href === 'index.html' && currentPath === '');
   };

   // Set active state on page load
   const setInitialActiveState = () => {
     let activeSet = false;

     // Check dropdown items first
     dropdownItems.forEach(item => {
       const href = item.getAttribute('href').split('#')[0];
       if (isActiveLink(href)) {
         const parentNavItem = item.closest('.nav-item');
         setActiveNav(parentNavItem);
         item.classList.add('active');
         activeSet = true;
       }
     });

     // Check top-level nav links if no dropdown item is active
     if (!activeSet) {
       navLinks.forEach(link => {
         const href = link.getAttribute('href').split('#')[0];
         const navItem = link.closest('.nav-item');
         if (isActiveLink(href)) {
           setActiveNav(navItem);
           activeSet = true;
         }
       });
     }
   };

  // Custom collapse toggle
  function initReadMoreToggle() {
    const buttons = document.querySelectorAll('.read-more');
    if (!buttons.length) {
      console.error('No .read-more buttons found');
      return;
    }

    buttons.forEach(button => {
      const collapseElement = document.querySelector(button.getAttribute('data-target'));
      if (!collapseElement) {
        console.error('Button or collapse element not found for', button);
        return;
      }

      button.addEventListener('click', function () {
        // Toggle the 'show' class
        collapseElement.classList.toggle('show');

        // Update button text
        if (collapseElement.classList.contains('show')) {
          button.textContent = 'Read Less';
        } else {
          button.textContent = 'Read More';
        }
      });
    });
  }

  // Smooth Scroll for Anchor Links
  function initSmoothScroll() {
    $('a[href*="#"]').not('[href="#"]').click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        event.preventDefault();
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 600);
          return false;
        }
      }
    });
  }

  // Donation form validation
  function initDonationForm() {
    const form = document.querySelector('.donate-form form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = document.getElementById('amount')?.value;
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        if (amount && name && email) {
          alert('Thank you for your donation! Processing...');
        } else {
          alert('Please fill in all fields.');
        }
      });
    }
  }

  // Donation Form Validation and Amount Buttons
  function initDonationFormButtons() {
    const donationForm = $('#donationForm');
    const amountInput = $('#amount');
    const amountButtons = $('.amount-btn');

    amountButtons.click(function() {
      amountButtons.removeClass('active');
      $(this).addClass('active');
      amountInput.val($(this).data('amount'));
      amountInput.removeClass('is-invalid');
      $('#amountError').hide();
    });

    donationForm.on('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      // Name validation
      const name = $('#name').val().trim();
      if (!name) {
        $('#name').addClass('is-invalid');
        isValid = false;
      } else {
        $('#name').removeClass('is-invalid');
      }

      // Email validation
      const email = $('#email').val().trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        $('#email').addClass('is-invalid');
        isValid = false;
      } else {
        $('#email').removeClass('is-invalid');
      }

      // Amount validation
      const amount = parseFloat(amountInput.val());
      if (isNaN(amount) || amount < 1) {
        amountInput.addClass('is-invalid');
        isValid = false;
      } else {
        amountInput.removeClass('is-invalid');
      }

      if (isValid) {
        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', { name, email, amount });
        alert('Thank you for your donation!');
        donationForm[0].reset();
        amountButtons.removeClass('active');
      }
    });
  }

  // Initialize Owl Carousels
  function initCarousels() {
    if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
      // Success Carousel (Objectives 2 & 3)
      if ($('.success-carousel').length) {
        $('.success-carousel').owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 }
          }
        });
        $('.success-carousel').css('visibility', 'visible');
      } else {
        console.log('No .success-carousel found');
      }

      // Testimonial Carousel
      if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          loop: true,
          center: true,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
          }
        });
      } else {
        console.log('No .testimonial-carousel found');
      }

      // Vendor Carousel
      if ($('.vendor-carousel').length) {
        $('.vendor-carousel').owlCarousel({
          loop: true,
          margin: 45,
          dots: false,
          autoplay: true,
          smartSpeed: 1000,
          responsive: {
            0: { items: 2 },
            576: { items: 4 },
            768: { items: 6 },
            992: { items: 8 }
          }
        });
      } else {
        console.log('No .vendor-carousel found');
      }

      // Generic Owl Carousel (fallback for other carousels)
      $('.owl-carousel').not('.success-carousel, .testimonial-carousel, .vendor-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1000: { items: 3 }
        }
      });
    } else {
      console.warn('Owl Carousel or jQuery not loaded. Displaying fallback content.');
      $('.carousel-fallback').removeClass('d-none');
      $('.success-carousel').addClass('d-none');
    }
  }

  // Facts counter
  function initCounters() {
    if ($('[data-toggle="counter-up"]').length && $.fn.counterUp) {
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
      });
    } else {
      console.log('No counter-up elements or counterUp plugin not loaded');
    }
  }

  // Sticky Navbar
  function initStickyNavbar() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm scrolled');
      } else {
        $('.navbar').removeClass('sticky-top shadow-sm scrolled');
      }
    });
  }

  // Dropdown on mouse hover
  function initDropdownHover() {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
          function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass); // Fixed bug: removed incorrect showClass addition
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  }

  // Back to top button
  function initBackToTop() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });
  }

  // Initialize Bootstrap Tooltips
  function initTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // Scroll Progress for Story Sections
  function initScrollProgress() {
    function updateScrollProgress(storyElement, progressElement) {
      const storyHeight = storyElement.scrollHeight - storyElement.clientHeight;
      const scrollTop = storyElement.scrollTop;
      const progressWidth = (scrollTop / storyHeight) * 100;
      progressElement.style.width = progressWidth + '%';
    }
  
    const storySections = document.querySelectorAll('.story-content');
    storySections.forEach((section, index) => {
      const progressBar = document.getElementById(`progress-founder${index + 1}`);
      section.addEventListener('scroll', () => updateScrollProgress(section, progressBar));
    });
  }

  // Scroll to top on reload
  function initScrollToTop() {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }

  // Single DOMContentLoaded listener for all initializations
  document.addEventListener('DOMContentLoaded', function() {
    try {
      console.log("DOM loaded");
      initAOS();
      initWOW();
      initSpinner();
      initNavigation();
      initReadMoreToggle();
      initSmoothScroll();
      initDonationForm();
      initDonationFormButtons();
      initCarousels();
      initCounters();
      initStickyNavbar();
      initDropdownHover();
      initBackToTop();
      initTooltips();
      initScrollProgress();
      initScrollToTop();
    } catch (error) {
      console.error('Script initialization error:', error);
      $('.carousel-fallback').removeClass('d-none');
      $('.success-carousel').addClass('d-none');
    }
  });

})(jQuery);
