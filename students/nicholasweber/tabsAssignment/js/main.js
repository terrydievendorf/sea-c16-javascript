$(document).ready
$('a').on('click', function (e) {
	$('#active-section').removeAttr('id', 'active-section');
	$(this).attr('id', 'active-section');
});
$(window).on('hashchange', function (e) {
  var content = $(location.hash).html();
  $('section').html(content);
});
