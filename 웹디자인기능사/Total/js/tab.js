
$(".tab_menu > li > a").click(function(){
	$(this).parent().addClass("on").siblings().removeClass("on");
	return false;
});


//$(".tab_menu > li > a").click(function(){
//    
//    $(this).parent().addClass("on");
//
//    return false;
//});
//
//
//$(".tab_menu > li > a").click(function(){
//    
//    $(this).parent().siblings().removeClass("on");
//
//    return false;
//});