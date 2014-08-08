var zoom = $('<div id="enlarge"></div>'),
    picture = $("<img>"),
    blurb = $("<p></p>");

zoom.append(picture);
zoom.append(blurb);
$("body").append(zoom);

$("#soccerTabs a").click(function(event){
  event.preventDefault();
  picture.attr("src", $(this).attr("href"));
  zoom.show();
  blurb.text($(this).children("img").attr("alt"));
});

zoom.click(function(){
  zoom.hide();
});










