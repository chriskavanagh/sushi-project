//uses scrollTo plugin to scroll from Home (in Nav) to #target in footer.


$(function(){
    $('#nav-about').click(function() {
		$.scrollTo($('#about'), 2000);
	});
	$('#nav-menu').click(function() {
		$.scrollTo($('#menu'), 2000);
	});
 });
 
 
