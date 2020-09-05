$(function() {
    $('#nav .dropdown').hover(function(e) {
        $(this).find('.li-heading a').addClass('current');
    }, function (e) {
        $(this).find('.li-heading a').removeClass('current');
    });
});

$(function() {
    $('.filter-heading').on('click', function () {
        //
        var $facet = $(this).parent().find('.facet');

        if ($facet.is(':hidden')) {
            //
            $(this).removeClass('arrow-close');
            $(this).addClass('arrow-open');
            $(this).parent().find('.search-brands').show();
            $(this).parent().find('.facet').show();
            //
        } else {
            //
            $(this).addClass('arrow-close');
            $(this).removeClass('arrow-open');
            $(this).parent().find('.search-brands').hide();
            $(this).parent().find('.facet').hide();
        }
    });
});
