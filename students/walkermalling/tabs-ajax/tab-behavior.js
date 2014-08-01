$(function(){

    // request tabs and content
    // pass an enclosure to hande response
    makeRequest('http://rs.hankyates.com:3000/content', 'application/json', function(response){
        var data = JSON.parse(response);

        for(key in data){
            var tab = data[key];

        }

        // now that the dom is updated...
        setBindings();
    });

    function setBindings(){

        var navItems = $('#nav ul li a'),   // cache it all on page-load
            tabContent = $('#content .tab-content'),
            marker = $('#marker'),
            stem = $('#stem'),
            offset = $('#nav').scrollLeft();

        navItems.on('click',function(){

            var tab = $(this),
                target = tab.data('target');

            navItems
                .removeClass('active'); // reset

            tab
                .addClass('active');    // activate tab

            tabContent                  // activate content
                .removeClass('active')
                .filter('[data-id="'+target+'"]')
                    .addClass('active');

            marker                      // slide marker
                .css('left', tab.position().left - parseInt(tab.css('border-right-width')) )
                .css('width', tab.innerWidth() )
                .css('border-bottom-color' , tabContent.filter('[data-id="'+target+'"]').css('border-top-color') )
                .css('top', tab.innerHeight() + 2 * parseInt(tab.css('border-top-width')) - 1 );
        });
    }


});
