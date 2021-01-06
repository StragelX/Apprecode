$( document ).ready(function() {
    $(".cookies .ok_btn").click(function(){
        $(this).closest(".cookies").addClass("hidden");
    })

    $(".phone").mask("+38(099) 999 99 99");

    $('.placer').blur(function(){
      ( $(this) ).val() !="" ? $(this).addClass("filled") : $(this).removeClass("filled");
    })

    var parallaxInstance = new Parallax(document.getElementById('bg'), {
      scalarX: 2.0,
      scalarY: 3.5
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
      
        navigation: {
          nextEl: '.swiper_next',
          prevEl: '.swiper_prev',
        },
    })

    $(".call_modal").click(function(){
      $("body").addClass("show_modal");
      $(".modal_overlay").removeClass("hidden");
    })

    $('.close_modal, .close').click(function(){
      $(this).closest(".modal_overlay").addClass("hidden");
      $("body").removeClass("show_modal");
    })
});