// JavaScript Document
var captionLength = 0;
var caption = '';

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
	captionE1 = $('#caption');
	
	$('#typing').click(function(){
		TypingErasingEffect();
	});
});

function TypingErasingEffect(){
	caption = $('input#user-caption').val();
	type();
}

function type(){
	captionE1.html(caption.substr(0, captionLength++));
	if(captionLength < caption.length+1) {
		setTimeout('type()', 50);
	} else {
		captionLength = 0;
		caption = '';
	}
}


$(function(){
	$(".element").typed({
		strings: ["First sentence.", "Second sentence."],
		typeSpeed:0
	});
});