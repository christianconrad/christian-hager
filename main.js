
// loading screen
$(document).ready(function(){
    setTimeout(function() {
	$('#load_screen').fadeOut(800);
    }, 800); 
});

$(document).ready(function(){
    setTimeout(function() {
    $('#loading').toggleClass('brighten');
    }, 2000); 
});

// handle menu clicks Google Analytics: change UA-XXXXX-X to be your site's ID.
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X','auto');ga('send','pageview');


$(document).ready(
			function(){
				$("#click").click(function () {
					$("#copyright_show").fadeToggle (300, "linear");
				});
			});
