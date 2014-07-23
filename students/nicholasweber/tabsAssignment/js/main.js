$(document).ready
//look up onHashChange
$(window).on('hashchange', function (e) {
  var displayThis = location.hash;
  var content = $(displayThis).html();
  $('section').html(content)
});