move = function() {
	clearTimeout( t );

	window.moveTo( window.screenLeft + 10, y );
	if( window.screenLeft >= screen.width-192 ) {
		window.close();
	} else {
		t = setTimeout( move, 10 );
	}
}

var t, y;
$(document).ready(function() {
	var bird = chrome.extension.getURL('bird.gif');
	$("body").append("<img src='"+bird+"' />");
	y = window.screenTop;
	t = setTimeout( move, 10 );
});