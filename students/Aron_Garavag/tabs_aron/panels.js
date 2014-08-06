$(function panelEvents() {
  $(".panelInfo").hide(); 
  $("li").click(function() {
      $("li").removeClass("chosen"); 
      $(this).addClass("chosen");  
      $(".panelInfo").slideUp(); 
      $($("a",this).attr("href")).slideDown(3000); 
  });
});