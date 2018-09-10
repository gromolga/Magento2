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
                $(element).find('.mega-menu_holder').slideDown();
                // $(element).find('.mega-menu_holder').addClass('mega-menu_holder__show-vertical');
                // $(element).find('.mega-menu_holder').addClass('slideDown');
                // $(element).find('.mega-menu_holder').removeClass('slideUp');
            }, function () {
                $(element).find('.mega-menu_holder').slideUp();
                // $(element).find('.mega-menu_holder').removeClass('mega-menu_holder__show-vertical');
                // $(element).find('.mega-menu_holder').removeClass('slideDown');
                // $(element).find('.mega-menu_holder').addClass('slideUp');
            });
        }


    }
});