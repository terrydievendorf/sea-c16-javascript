$(document).ready(function () {

	$(".tab").click(function() {
		$(".tab").removeClass('tabSelected');
		$(this).addClass('tabSelected');
		$(".contents-1").show();
	});

	$('.plot').append("</br></br>Enter the passcode to reveal the ending of this film.</br><input><button class='reveal'>Reveal</button>");

	$(".reveal").click(function() {
		var input = $("input").val().toLowerCase();
		if (input == "jedi") {
			$(".ending").show();
		} else {
			$("input").val("enter the passcode");
		}
	});

});