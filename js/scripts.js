$(document).ready(function() {
    
    $('.services-slider').slick({
          arrows: true,
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.portfolio-slider').slick({
          arrows: true,
          appendArrows: '.portfolio-nav-bottom .portfolio-buttons',
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('button.slick-next').click(function(e){
      e.preventDefault();
      $(".portfolio-slider").slick('slickNext');
    });
    $('button.slick-prev').click(function(e){
      e.preventDefault();
      $(".portfolio-slider").slick('slickPrev');
    });
    
    $('.team-slider').slick({
          arrows: true,
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '',
        lockAnchors: false,
        anchors:['home', 'services','portfolio','ourTeam','advantages','contacts','footer'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['HOME', 'SERVICES', 'PORTFOLIO', 'OUR TEAM', 'ADVANTAGES', 'CONTACTS', 'button'],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['transparrent', 'transparrent', 'transparrent', 'transparrent', 'transparrent', 'transparrent'],
        paddingTop: '',
        paddingBottom: '',
        fixedElements: '',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
          if(index == 3){
            $('.stone').addClass('stone-anim');
          }
          if((index == 2 && direction == 'down') || (index == 4 && direction == 'up')){
            $('.stone').removeClass('stone-anim');
          }
        },
        afterLoad: function(anchorLink, index){
          if(anchorLink == 'portfolio'){
            $('.stone').removeClass('stone-anim');
          }
        },
        afterRender: function(){},
        afterResize: function(){},
    });

    $("#fp-nav ul li:last-child").click(function(e) {
        e.preventDefault();
        $("#fp-nav").toggleClass('hidden-menu');
        $(".section").toggleClass('pl-0')
    });
});

// START Hide preloader after load page
  $(window).on('load', function () {
      var $preloader = $('#page-preloader'),
          $spinner   = $preloader.find('.spinner');
      $spinner.fadeOut();
      $preloader.delay(350).fadeOut('slow');
  });
// FINISH Hide preloader after load page