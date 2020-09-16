$(".nav").mouseover(function() {
   $(this).children(".menu_box").stop().slideDown();
});


$(".nav").mouseleave(function () {
    $(this).children(".menu_box").stop.slideUp();
});
