/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define([
    "jquery",
    "owl"
], function ($) {
    'use strict';

    return function (config, element) {
        $(element).owlCarousel(config)
    }
});