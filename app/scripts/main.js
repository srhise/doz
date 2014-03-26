$('#navigation-link').on('click', function() {
    console.log('clicked');
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

if (!Modernizr.svg) {
    $("#logo img").attr("src", "images/logo-530x235.png");
}

$(document).ready(function() {
    $('.services-popover').popover({
        html: true,
        content: function() {
            return $('#services_dropdown_content').html();
        }
    });
  
});
