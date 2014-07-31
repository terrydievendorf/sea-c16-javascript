 $(document).ready(function() {
 	$('.cats li:first').addClass('currentTab');
 	$('#cat1').show();
 	var tabNum = 1;
 	
 	$('.catTab').click(function() {
 		tabNum = $(this).val();
 		$(".catTab").removeClass('currentTab');
 		$(this).addClass('currentTab');
 		

 		$(".catType").hide();
 		$("#cat" + tabNum).fadeIn('slow'); 
 	});
});