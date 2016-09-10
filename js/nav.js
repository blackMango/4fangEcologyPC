// JavaScript Document
$(function () {
/*	$("#navmenu .img").parent().find('span').click(
		function(){
			$("#navmenu .img").eq(0).toggle();
			$("#navmenu .img").eq(1).toggle();
		}
	);
*/
	$("#navmenu .img").eq(0).hide();
	
	$("#navmenu .img").parent().find('span').bind(
		'mouseenter',function(){
			$("#navmenu .img").eq(0).show();
			$("#navmenu .img").eq(1).hide();
			$("#navmenu #service #telbox #tel").show();
			
		}
	).parent().bind(
		'mouseleave',function(){
			$("#navmenu .img").eq(0).hide();
			$("#navmenu .img").eq(1).show();
			$("#navmenu #service #telbox #tel").hide();
			
		}
	);
	
	
})












