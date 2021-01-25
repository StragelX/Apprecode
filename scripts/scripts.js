$( document ).ready(function() {
    $(".cookies .ok_btn").click(function(){
        $(this).closest(".cookies").addClass("hidden");
    })

    $(".phone").mask("+38(099) 999 99 99");

    $('.placer').blur(function(){
      ( $(this) ).val() !="" ? $(this).addClass("filled") : $(this).removeClass("filled");
    })

    // var parallaxInstance = new Parallax(document.getElementById('bg'), {
    //   scalarX: 2.0,
    //   scalarY: 3.5
    // });

    var reviewSlider = new Swiper('.reviewSlider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
      
        navigation: {
          nextEl: '.review_next',
          prevEl: '.review_prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },

          767: {
            slidesPerView: 2,
          },

          1000: {
            slidesPerView: 3,
          }
        }
    })

    var sponsorsSlider = new Swiper('.sponsorsSlider', {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
    
      navigation: {
        nextEl: '.sponsors_next',
        prevEl: '.sponsors_prev',
      },
  })

    $(".call_modal").click(function(){
      $("body").addClass("show_modal");
      $(".modal_overlay[data-modal='thanks']").removeClass("hidden");
    })

    $(".call_modal_form").click(function(){
      $("body").addClass("show_modal");
      $(".modal_overlay[data-modal='form']").removeClass("hidden");
    })

    $('.close_modal, .close').click(function(){
      $(this).closest(".modal_overlay").addClass("hidden");
      $("body").removeClass("show_modal");
    })

    $('.categorie').click(function(){
      $(this).addClass('active').siblings('.categorie').removeClass('active');
      
    })

    $('header .container nav ul li').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })

    // Menu higlight on scroll start
    // Cache selectors
    var topMenu = $("header .container nav ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    // Bind to scroll
    $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
    .parent().removeClass("active")
    .end().filter("[href='#"+id+"']").parent().addClass("active");
    });
    // Menu higlight on scroll end

    wow = new WOW(
      {
        mobile: false
      })

    wow.init();

    $('.burger').click(function(){
      $('.burger, header .container nav').toggleClass('active');
      $("body").addClass("show_modal");
    });

    $('header .container nav ul li, .get_in_touch').click(function(){
      $('.burger, header .container nav').removeClass('active');
      $("body").removeClass("show_modal");
    })

});