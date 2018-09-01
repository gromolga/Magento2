/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery",
    "owl"
], function ($) {
    'use strict';

    return function (config, element) {
        $(element).owlCarousel({
            items: 1,
            loop: true,
            responsive : {
                0 : {
                    dots: false,
                    nav: false,
                },
                767 : {
                    dots: true,
                    nav: true
                }
            }
        })
    }
});