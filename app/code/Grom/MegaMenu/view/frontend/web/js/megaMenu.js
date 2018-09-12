/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery"
], function ($) {
    'use strict';

    return function (config, element) {
        if (!config.home) {
            $('[data-action=show-mega-menu_holder]').hover(function () {
                $(element).find('.mega-menu_holder').removeClass('mega-menu_holder-page__slideUp');
                $(element).find('.mega-menu_holder').addClass('mega-menu_holder-page__slideDown');
            }, function () {
                $(element).find('.mega-menu_holder').removeClass('mega-menu_holder-page__slideDown');
                $(element).find('.mega-menu_holder').addClass('mega-menu_holder-page__slideUp');
            });
        }
    }
});