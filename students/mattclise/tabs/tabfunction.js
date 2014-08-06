$(document).ready(function(){
	

	$('button').on('click', function(e) {
	  $('.selected').removeClass('selected');
	  $(this).addClass('selected');
	  $('#content p').addClass('hidden');
	    
	  var panel = $(this).attr('id');  
	  $('#' + panel + '-content').removeClass('hidden');  
	});

});