var headerHeight = 300;

$(window).bind('scroll', function (e) {
	if ($(window).scrollTop() > headerHeight) {
		$('#myNav').removeClass('navbar-top');
		$('#myNav').addClass('fixed-top');

	} else {
		$('#myNav').removeClass('fixed-top');
		$('#myNav').addClass('navbar-top');

	}
	
});