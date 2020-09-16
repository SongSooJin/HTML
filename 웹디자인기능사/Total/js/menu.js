//가로 고정 / 전체 메뉴형
//
$(".nav").mouseover(function() {
   $(this).children(".menu_box").stop().slideDown();
});


$(".nav").mouseleave(function () {
    $(this).children(".menu_box").stop().slideUp();
});


//가로메뉴형
//
//$(".nav>ul>li").mouseover(function(){
//	$(this).children(".menu_box").stop().slideDown();
//});
//
//$(".nav>ul>li").mouseleave(function(){
//	$(this).children(".menu_box").stop().slideUp();
//});


