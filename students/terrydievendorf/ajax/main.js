$(document).ready;
getTabs = function() {
  var hankAPI = 'http://rs.hankyates.com:3000/content';
  var tabs = [];
  $.getJSON(hankAPI, function(data) {
    $.each(data, function( tab, content) {
      console.log(tab);
      console.log(content);
      tabs.push(tab);
    });
  });
};

getTabs();

