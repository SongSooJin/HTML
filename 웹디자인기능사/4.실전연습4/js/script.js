jQuery(document).ready(function(){
    
    // 메뉴 구현
    $(".navi>li").mouseover(function(){
       $(this).find(".submenu").stop().slideDown(500); 
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    
    // 페이드인 아웃 구현
    $(".slide a:gt(0)").hide();
    setInterval(function(){
        $(".slide a:first-child").fadeOut().next("a").fadeIn()
        .end().appendTo(".slide");
    },3000);
    
    // 탭메뉴 구현
    $(function(){
        $(".tabmenu>li>a").click(function(){
            $(this).parent().addClass("active").siblings()
            .removeClass("active");
            
            return false;
        });
    });
    
    // 레이어 팝업 기능
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
   
});

