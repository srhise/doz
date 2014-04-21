if (!Modernizr.svg) {
    $("#logo img").attr("src", "images/logo-530x235.png");
    $("#logo-footer").attr("src", "images/logo-white.png");
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
        $('.insights-popover').popover('hide');
        $('.careers-popover').popover('hide');
        $('.community-popover').popover('hide');
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
        $('.insights-popover').popover('hide');
        $('.careers-popover').popover('hide');
        $('.community-popover').popover('hide');
        $(this).popover('show');
    });

    $('.insights-popover').popover({
        html: true,
        content: function() {
            return $('#insights_dropdown_content').html();
        },
        trigger: 'manual',
        animation: false
    }).mouseenter(function(e) {
        $('.about-popover').popover('hide');
        $('.services-popover').popover('hide');
        $('.careers-popover').popover('hide');
        $('.community-popover').popover('hide');
        $(this).popover('show');
        $(this).next().css('left', '-228px');
        $(this).next().children('.arrow').css('left', '52%');
    });

    $('.careers-popover').popover({
        html: true,
        content: function() {
            return $('#careers_dropdown_content').html();
        },
        trigger: 'manual',
        animation: false
    }).mouseenter(function(e) {
        $('.about-popover').popover('hide');
        $('.insights-popover').popover('hide');
        $('.services-popover').popover('hide');
        $('.community-popover').popover('hide');
        $(this).popover('show');
        $(this).next().css('left', '-308px');
        $(this).next().children('.arrow').css('left', '69%');
    });

    $('.community-popover').popover({
        html: true,
        content: function() {
            return $('#community_dropdown_content').html();
        },
        trigger: 'manual',
        animation: false
    }).mouseenter(function(e) {

        $('.about-popover').popover('hide');
        $('.insights-popover').popover('hide');
        $('.services-popover').popover('hide');
        $('.careers-popover').popover('hide');
        $(this).popover('show');
        $(this).next().css('left', '-386px');
        $(this).next().children('.arrow').css('left', '86%');

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

    $(document).unbind('click').bind('click', function(e) {
        var className;
        className = e.target.className;
        if (className.indexOf('popover') == -1) {
            $('*').popover('hide');
        }
    });
    if ($('html').hasClass('page')) {
        $.shifter({
            maxWidth: '720px'
        });
    }


    handleSectionNav();
    $(window).on('resize', function(event) {
        handleSectionNav();
    });
});

function handleSectionNav() {
    var windowWidth, listWidth;
    windowWidth = $(window).width();
    listWidth = windowWidth - 20;
    if (windowWidth < 720) {
        handleSectionNavClicks();
    } else {
        $('#main-nav-container a').tooltip({
            "html": false
        });
        $('#sectionNavigation h3.widget-title').unbind('click');
        $('#sectionNavigation ul#sectionSubNav').removeClass('hide');
    }
}

function handleSectionNavClicks() {
    var windowWidth, listWidth;
    windowWidth = $(window).width();
    listWidth = windowWidth - 20;
    $('#sectionNavigation h3.widget-title').unbind('click').bind('click', function() {
        if ($('#sectionNavigation ul#sectionSubNav').is(":visible")) {
            $('#sectionNavigation ul#sectionSubNav').css('width', listWidth + 'px');
            $('#sectionNavigation i').removeClass('fa-minus-circle');
            $('#sectionNavigation i').addClass('fa-plus-circle');
        } else {
            $('#sectionNavigation ul#sectionSubNav').css('width', listWidth + 'px');
            $('#sectionNavigation i').removeClass('fa-plus-circle');
            $('#sectionNavigation i').addClass('fa-minus-circle');
        }
        $('#sectionNavigation ul#sectionSubNav').fadeToggle(0);
    });
}