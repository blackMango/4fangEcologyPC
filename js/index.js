// JavaScript Document
$(function () {
/*
*/	
	var i = 1;
	var size = $("#section .banner .bannerbox .photobox img").length;
	var t = setInterval (move,3000);
	function move (){
		i++;
		if(i == size){
			i = 0;
		}
		$("#section .banner .bannerbox .photobox img").eq(i).show().siblings().hide();
		$("#section .banner .ctrlboxsmall .ctrl").eq(size-1-i).addClass("currentBg").siblings().removeClass("currentBg");
	}
	
	$("#section .banner .bannerbox .photobox img").eq(0).show().siblings().hide();
	$("#section .banner .ctrlboxsmall .ctrl").mouseenter(
		function(){
			$(this).addClass("currentBg").siblings().removeClass("currentBg");
			$("#section .banner .bannerbox .photobox img").eq($(this).index()).show().siblings().hide();
		}
	);

})
