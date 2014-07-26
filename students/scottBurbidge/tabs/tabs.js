

$(document).ready(function(){
  $(".tab").click(function(){
    var wind = $(this).val()
    $(".pane").addClass("paneGone").removeClass("paneSelect")
    $("#in" + wind).removeClass("paneGone").addClass("paneSelect")
    })
  
  $(".image").click(function(){
    $(this).next().addClass("image").removeClass("noImage")
    $(this).removeClass("image").addClass("noImage")
     })
  })