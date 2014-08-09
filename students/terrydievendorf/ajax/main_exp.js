$(document).ready;
getTabs = function() {
  var hankAPI = 'http://rs.hankyates.com:3000/content';
  $.getJSON(hankAPI,{
    name: "name",
    content: "content",
    format: "json"
  })
};

getTabs();
