jQuery(document).ready(function(){
    
    // 메뉴 구현
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    
    
    // 슬라이드 구현
//    $(".slide a:gt(0)").hide();
//    
//    setInterval(function(){
//        $(".slide a:first-child").fadeOut().next("a")
//        .fadeIn().end().appendTo(".slide");
//    },3000);
    
    var img = 2;
    var now = 0;
    
    start();
    
    function start(){
        $(".slide>a").eq(0).siblings().animate({width:"-1200px"});
        
        setInterval(function(){
          now = now==img?0:now+=1;
            
            $(".slide>a").eq(now-1).animate({width:"-1200px"});
            $(".slide>a").eq(now).animate({width:"1200px"});
        },3000)
    };

    
    // 탭메뉴
    $(function(){
        $(".tabmenu>li>a").click(function(){
            $(this).parent().addClass("active")
            .siblings().removeClass("active");
            
            return false;
        });
    });
    
    // 팝업 구현
    $(".notice li:first").click(function(){
        $("#modal").addClass("active");
    });
    $(".btn").click(function(){
        $("#modal").removeClass("active");
    });
    
});