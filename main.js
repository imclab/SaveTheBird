var mywindow;
$(document).ready(function() {
	var bird = chrome.extension.getURL('bird.gif');
	var splat = chrome.extension.getURL('splat.png');
	var popup = chrome.extension.getURL('popup.html');
	if( $("thebirdbox").length == 0 ) {
		$("body:first").prepend("<div id='thebirdbox'><img src='"+bird+"' /></div>");
		$("#thebirdbox").css({
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 1000000,
			width: $(document).width(),
			height: $(document).height()
		});
		$("#thebirdbox img").css({
			position: "absolute",
			top: 200,
			left: 200,
			width: 192
		}).animate({
			width: 800
		}, 4000, 'linear', function() {
			if( $(window).height() < 200 ) {
				$("#thebirdbox").remove();
				var x = screen.width/2-(192/2);
				var y = screen.height/2-(170/2);
				mywindow = window.open(popup, "popup", "width=192,height=170,left="+x+",top="+y);
			} else {
				$(this).attr("src", splat );
				$(this).animate({
					top: 1000
				}, 1500, function(){
					$("#thebirdbox").remove();
				});
			}
		});
	}
});