'use strict';

$(function () {
    //文档加载完成才会执行


    $(window).on('resize', resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();

    let $newsTitle = $('.news-title');

    $("#news .nav-pills a").on("click", function(e){
        let $this = $(this);
        
        let title = $this.data("title");

        $newsTitle.text(title);
    })

})

function resize() {
    var windowWidth = $(window).width();
    var isSmallScreen = windowWidth < 768;

    $('#main_ad > .carousel-inner > .item').each(function (i, item) {
        let $item = $(item);
        // console.log(item);
        let imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg');

        $item.css('backgroundImage', `url('${imgSrc}')`);

        if (isSmallScreen) {
            $item.html(`<img src="${imgSrc}" alt="">`);
        } else {
            $item.empty();
        }

    })


    var windowWidth = $(window).width();

    let $urlContainer = $('.nav-tabs');
    let width = 50;

    $urlContainer.children().each(function (index, elem) {
        width += elem.clientWidth;
    })

    if (windowWidth < width) {
        $urlContainer
            .css('width', width);
    }
}