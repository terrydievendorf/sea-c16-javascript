$(function(){

    var navItems = $('#nav ul li a'),
        tabContent = $('#content .tab-content'),
        marker = $('#marker'),
        stem = $('#stem'),
        offset = $('#nav').scrollLeft();

    navItems.on('click',function(){

        var $this = $(this),
            target = $this.data('target');

        navItems
            .removeClass('active'); // reset

        $this
            .addClass('active');

        tabContent
            .removeClass('active')
            .filter('[data-id="'+target+'"]')
                .addClass('active');

        marker
            .css('left', $this.position().left - 4 )
            .css('width', $this.innerWidth() )
            .css('border-bottom-color' , tabContent.filter('[data-id="'+target+'"]').css('border-top-color') )
            .css('top', $this.innerHeight() + 7 );







        // stem
        //     .css('background', tabContent.filter('[data-id="'+target+'"]').css('border-top-color') );
    });
});
