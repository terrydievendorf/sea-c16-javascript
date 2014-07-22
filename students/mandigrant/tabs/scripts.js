$(document).ready(function () {

	$(".tab").click(function() {
		//highlight existing tab, unhighlight the rest
		$(".tab").removeClass('tabSelected');
		$(this).addClass('tabSelected');
		//show the div that corresponds to the selected button

		$(".contents").hide();

		var episodeNum = $(this).val();
		$("#ep" + episodeNum).show();
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