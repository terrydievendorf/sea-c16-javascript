$(document).ready(function() {
	$('#show-tab').addClass('active-tab');
	$('#show-content').addClass('active-content');

	$('.tabs').on('click', function() {
		var selected = $(this).attr('.tabs > class');
		$('.tab-text').fadeOut('slow');
		$('.tab-content').removeClass('active-content')
		$('.tabs').removeClass('active-tab');
		$('this').addClass('active-tab');
		$('.tab-content' + '.' + selected).fadeIn('slow');	
		console.log(selected);	
	});	
});