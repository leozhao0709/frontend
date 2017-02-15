'use strict';

$(function () {
    //文档加载完成才会执行
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;

        $('#main_ad > .carousel-inner > .item').each(function (i, item) {
            let $item = $(item);
            // console.log(item);
            let imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg');

            $item.css('backgroundImage', `url('${imgSrc}')`);

            if(isSmallScreen) {
                $item.html(`<img src="${imgSrc}" alt="">`);
            } 
            else {
                $item.empty();
            }

        })
    }

    $(window).on('resize', resize).trigger('resize');
})