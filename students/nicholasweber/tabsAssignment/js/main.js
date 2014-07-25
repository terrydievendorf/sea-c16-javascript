$(document).ready
//look up onHashChange
$(window).on('hashchange', function (e) {
  var content = $(location.hash).html();
  $('section').html(content);
});
