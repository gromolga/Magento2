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
        $('[data-action=show-mobile-dropdown_second-level]').click(function () {
            $(this).next('.mobile-nav_dropdown__second-level').addClass('mobile-nav_dropdown__second-level-show');
        });
        $('[data-action=hide-mobile-dropdown_second-level]').click(function () {
            $('.mobile-nav_dropdown__second-level').removeClass('mobile-nav_dropdown__second-level-show');
        });
    }
});