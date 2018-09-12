/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery"
], function ($) {
    'use strict';

    return function (config, element) {
        $('[data-action=show-mobile-dropdown]').click(function () {
            $('.mobile-nav_dropdown').removeClass('mobile-nav_dropdown__hide');
            $('.mobile-nav_dropdown').addClass('mobile-nav_dropdown__show');
            $('body').addClass('body-overflow')
        });
        $('[data-action=hide-mobile-dropdown]').click(function () {
            $('.mobile-nav_dropdown').addClass('mobile-nav_dropdown__hide');
            $('.mobile-nav_dropdown').removeClass('mobile-nav_dropdown__show');
            $('body').removeClass('body-overflow')
        });
    }

    return function (config, element) {
        $('.mega-menu-link').hover(function () {
            $(".mega-menu-link").next().find(".mega-menu_list").css('display', 'flex');
        }, function () {
            $(".mega-menu-link").next().find(".mega-menu_list").css('display', 'none');
        });
    }

});