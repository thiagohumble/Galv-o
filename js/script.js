$(document).ready(function() {
$("#nav").navgoco({accordion: true, save: false})
})


$(function(){
	$('nav#navigation ul li a').hover(function(){ /*quando passar o mouse faz:*/
		var newWidth = $(this).width() + 16;      /* acao ao passar o mouse*/
		var newLeft  = $(this).position().left;
		
		$('span.linha').stop().animate({
			width: newWidth,
			left: newLeft
		},300);
	});
});

$(document).ready(function() {
    $("#demo2").navgoco({accordion: true});
})