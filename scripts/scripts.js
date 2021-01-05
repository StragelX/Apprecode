$( document ).ready(function() {
    $(".cookies .ok_btn").click(function(){
        $(this).closest(".cookies").addClass("hidden");
    })

    var bg = document.getElementById('bg');
    var parallaxInstance = new Parallax(bg, {
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
});