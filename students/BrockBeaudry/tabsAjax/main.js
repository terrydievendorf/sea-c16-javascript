$(document).ready(function() {
    var url = 'http://rs.hankyates.com:3000/content';

    getTabs(url)
        .done(setupTabs);
});

function getTabs(url) {
    return $.getJSON(url, function(data) {
        data.forEach(function (tab, index){
            // Add the tab to tabs-list
            $('<li/>')
                .append(
                    $('<a/>')
                        .addClass('inner')
                        .attr('href', '#' + tab.name)
                        .html(capitalize(tab.name)))
                .appendTo('.tabs-list');

            // Add the tab content to tabs-content
            $('<div/>')
                .attr('id', tab.name)
                .append('<h2>' + capitalize(tab.name) + '</h2>')
                .append('<p>' + tab.content + '</p>')
                .appendTo('.tabs-content');

        });
    });
}

function setupTabs() {
    $('.tabs-list li').first().addClass('active');

    // Hide the contents of a tab if it's not selected
    $('.tabs-list > li').not('.active').each(function() {
        var hash = $(this).find('a').prop('hash');
        
        $(hash).hide();
    });

    $('.tabs-list a').on('click', function() {
        // Previously selected tab
        var $previous = $('.active').find('a');  

        // Deselect it
        $previous.closest('li').removeClass('active');

        // Hide the contents
        $($previous.prop('hash')).hide();

        // Select the new tab and show it's contents
        $(this).closest('li').addClass('active');  
        $(this.hash).show();
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
}


