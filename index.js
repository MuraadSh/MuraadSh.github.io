jQuery(document).ready(function($) {
	$("body").on('click', '.go_back', function(event) {
		$(this).parent().slideUp(200);
	});
});