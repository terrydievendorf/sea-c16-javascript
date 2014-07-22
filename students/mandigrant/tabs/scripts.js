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

	$('.plot').append($(".passcodePrompt"));

	$(".reveal").click(function() {
		var input = $("input").val().toLowerCase();
		if (input == "jedi") {
			$(".ending").show(1000);
			$(".passcodePrompt").hide(1000);
		} else {
			$(".error").html("");
			$(".error").append("Enter the passcode.");
		}
	});

});