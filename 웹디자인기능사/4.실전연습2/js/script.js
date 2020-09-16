jQuery(document).ready(function() {

  // 메뉴규현
  $(".navi>li").mouseover(function() {
    $(this).find(".submenu").stop().slideDown(500);
}).mouseout(function() {
    $(this).find(".submenu").stop().slideUp(500);
});   
    
// 좌우 슬라이드
var img = 2;
var now = 0;

start();    
    
function start() {
    $(".slide>a").eq(0).siblings().animate({width:"-800px"});
    
    setInterval(function() {
        now = now==img?0:now+=1;
        
        $(".slide>a").eq(now-1).animate({width:"-800px"});
        $(".slide>a").eq(now).animate({width:"800px"});
    },3000);
}

// 탭메뉴 구현
$(function() {
    $(".tabmenu>li>a").click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
        
        return false;
    });   
}); 

    
// 레이어 팝업 구현    
$(".notice li:first").click(function() {
    $("#modal").addClass("active"); 
});
    
$(".btn").click(function() {
    $("#modal").removeClass("active");
}); 
    
});