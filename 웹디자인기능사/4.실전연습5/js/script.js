jQuery(document).ready(function(){
    
    // 메뉴 구현
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
        $("#menuwrap").stop().animate({
            "height":"220px"
        });
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
         $("#menuwrap").stop().animate({
            "height":"120px"
        });
    });
    
    // 페이드 인 아웃 슬라이드 구현
    $(".slide a:gt(0)").hide();
    setInterval(function(){
        $(".slide a:first-child").fadeOut().next("a")
        .fadeIn().end().appendTo(".slide");
    },3000);
    
    // 레이어 팝업 구현
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
    
});