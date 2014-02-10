$(function() {
    FastClick.attach(document.body);
});

$('#navigation-link').on('click', function() {
	$('#drawernav').slideToggle(200, function(){
		if ($(this).is(":hidden")) {
			$('#navigation-link i').removeClass('fa-minus-circle');
			$('#navigation-link i').addClass('fa-plus-circle');
		} else {
			$('#navigation-link i').removeClass('fa-plus-circle');
			$('#navigation-link i').addClass('fa-minus-circle');
		}
	});
});