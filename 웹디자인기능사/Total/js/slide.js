////좌우 슬라이드
start();

var img = 2;
var now = 0;

function start(){
    $(".slide>img").eq(0).siblings().css({"margin-left":"-1200px"});
    
    setInterval(function() {slide();},3000);
}

function slide() {
    now=now==img?0:now+=1;
    
    $(".slide>img").eq(now-1).css({"margin-left":"-1200px"});
    
    $(".slide>img").eq(now).css({"margin-left":"0px"});
}


////상하슬라이드
//start();
//var imgs = 2;
//var now = 0;
//
//function start(){
//	$(".slide>img").eq(0).siblings().css({"margin-top":"-400px"});
//	setInterval(function(){slide();},3000);
//}
//
//function slide(){
//	now = now == imgs?0:now+=1;	
//	$(".slide>img").eq(now-1).css({"margin-top":"-400px"});  
//	$(".slide>img").eq(now).css({"margin-top":"0px"});  
//}

//페이드인아웃
//start();
//var imgs = 2;
//var now = 0;
//
//function start(){
//	$(".slide>img").eq(0).siblings().fadeOut(3000);
//	setInterval(function(){slide();},3000);
//}
//
//function slide(){
//	now = now == imgs?0:now+=1;	
//	$(".slide>img").eq(now-1).fadeOut(3000);  
//	$(".slide>img").eq(now).fadeIn(3000);  
//}