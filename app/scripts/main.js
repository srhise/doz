if (!Modernizr.svg) {
    $("#logo img").attr("src", "images/logo-530x235.png");
    $("#logo-footer").attr("src", "images/logo-white.png");
}

$(document).ready(function() {

    var hideTwitterAttempts = 0;

    // somewhere in your code after html page load
    hideTwitterBoxElements();

    if ($('#sticky').length > 0) {
        $("#sticky").sticky({
            topSpacing: 0,
            className: 'stuck',
            minWidthToStick: 0
        });
    }

    if ($('.tabs').length > 0) {
        $('.tabs').easyResponsiveTabs();
    }
   

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

        $('.popover').mouseleave(function(e) {
            $('*').popover('hide');
        });
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
        $('.popover').mouseleave(function(e) {
            $('*').popover('hide');
        });
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
        $('.popover').mouseleave(function(e) {
            $('*').popover('hide');
        });
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

        $('.popover').mouseleave(function(e) {
            $('*').popover('hide');
        });
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

        $('.popover').mouseleave(function(e) {
            $('*').popover('hide');
        });

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

    $('.popover').mouseenter(function(e) {
        console.log('test');
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
var hideTwitterAttempts = 0;
function hideTwitterBoxElements() {
    setTimeout(function() {
        if ($('[id*=twitter]').length) {
            $('[id*=twitter]').each(function() {
                
                var ibody = $(this).contents().find('body');

                if (ibody.find('.timeline .stream .h-feed li.tweet').length) {
                    ibody.find( '.summary' ).html('DOZ on Twitter');
                    ibody.find( '.summary' ).css('color', '#034670');
                    ibody.find( '.follow-button' ).css('margin-top', '4px');
                    ibody.find( 'li.tweet' ).css('border', '1px solid #eeeeee');
                    ibody.find( 'li.tweet' ).css('padding', '3px 7px');
                    ibody.find( 'li.tweet' ).css('margin-bottom', '5px');
                    ibody.find( 'li.tweet' ).css('border-radius', '6px');
                    
                } else {
                    $(this).hide();
                }
            });
        }
        hideTwitterAttempts++;
        if (hideTwitterAttempts < 3) {
            hideTwitterBoxElements();
        }
    }, 500);
}