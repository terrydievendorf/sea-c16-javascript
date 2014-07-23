$(function(){

    var navItems = $('#navigation ul li a'),
        tabContent = $('#content .tab-content');

    navItems.on('click',function(){

        var $this = $(this),
            target = $this.data('target');

        navItems
            .removeClass('active')

        $this
            .addClass('active');

        tabContent
            .removeClass('active')
            .filter('[data-id="'+target+'"]')
                .addClass('active');

    });
});
