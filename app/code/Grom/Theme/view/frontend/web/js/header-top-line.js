/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery"
], function ($) {
    'use strict';

    return function (config, element) {
        $('[data-action=header-dropdown_btn]').click(function () {
            $(this).toggleClass('header-dropdown_btn__active');
            $(this).children('.header-dropdown_content').fadeToggle();
        });
        $('[data-action=drawer_btn]').click(function () {
            $('.drawer').addClass('drawer__show');
        });
        $('[data-action=drawer_btn-close]').click(function () {
            $('.drawer').removeClass('drawer__show');
        })
    }
});