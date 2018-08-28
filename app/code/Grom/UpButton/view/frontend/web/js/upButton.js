/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery"
], function ($) {
    'use strict';

    return function (config, element) {

        $(element).click(function () {
            scrollBodyToWhileTime(0, 2000);
        });

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll < 200) {
                $(element).css({opacity: 0}).addClass('up-btn_hide');
            } else if (scroll < 1000) {
                scroll = (scroll - 200) / 800.00;
                $(element).css({opacity: scroll}).removeClass('up-btn_hide');
            } else {
                $(element).css({opacity: 1}).removeClass('up-btn_hide');
            }

        });

        function scrollBodyToWhileTime(top, time) {
            $('html, body').animate({
                scrollTop: top
            }, time);
        }

    }
});