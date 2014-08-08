$(document).ready(function(){
	$.getJSON('http://rs.hankyates.com:3000/content', function(data){
		data.forEach(function(item){
			$('#tabs ul').append("<li><button id='" + item['name'] + "' href='#'>" + item['name'].toUpperCase() + "</button></li>")
			$('#content ul').append("<li id='" + item['name'] + "-content' class='hidden'><p>" + item['content'] + "</p></li>")
		});

		$('button').on('click', function() {
		  $('.selected').removeClass('selected');
		  $(this).addClass('selected');
		  $('#content ul li').addClass('hidden');
		    
		  var panel = $(this).attr('id');  
		  $('#' + panel + '-content').removeClass('hidden');  
		});
	});
});
