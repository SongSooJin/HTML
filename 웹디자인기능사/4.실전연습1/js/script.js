jQuery(document).ready(function (){

    // 메뉴구현
    $(".navi>li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    });

    $(".navi>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();
    });
    
    // 페이드인 아웃 슬라이드 구현
    $(".slide a:gt(0) ").hide();
    setInterval (function () {
        $(".slide a:first-child").fadeOut(1000)
        .next("a").fadeIn(1000)
        .end().appendTo(".slide");
    },3000);

    // 모달 레이어 팝업 구현
    $(".notice li:first").click(function() {
       $("#model").addClass("active"); 
    });
    
    $(".btn").click(function() {
       $("#model").removeClass("active");
    });
});
