if (!Modernizr.svg) {
    $("#logo img").attr("src", "images/logo-530x235.png");
}

$(document).ready(function() {

    $('.services-popover').popover({
        html: true,
        content: function() {
            return $('#services_dropdown_content').html();
        },
        trigger: 'manual',
        animation: false
    }).mouseenter(function(e) {
        $('.about-popover').popover('hide');
        $(this).popover('show');
    });

    $('.about-popover').popover({
        html: true,
        content: function() {
            return $('#about_dropdown_content').html();
        },
        trigger: 'manual',
        animation: false
    }).mouseenter(function(e) {
        $('.services-popover').popover('hide');
        $(this).popover('show');
    });

    $('#navigation-link').on('click', function() {
        $('#mainnavrow').slideToggle(200, function() {
            if ($(this).is(":hidden")) {
                $('#navigation-link i').removeClass('fa-minus-circle');
                $('#navigation-link i').addClass('fa-plus-circle');
            } else {
                $('#navigation-link i').removeClass('fa-plus-circle');
                $('#navigation-link i').addClass('fa-minus-circle');
            }
        });
    });

    $('#main-nav-container a').tooltip({
        "html": false
    });

    $(document).unbind('click').bind('click', function(e) {
        var className;
        className = e.target.className;
        if (className.indexOf('popover') == -1) {
            $('*').popover('hide');
        }
        
    });

});