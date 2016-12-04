/**
 * Created by Milan Peters on 06.11.2016
 */

module.exports = function () {
    "use strict";

    // First include pollyfills
    require('./polyfills');

    var angular = require('angular');
    var ngRoute = require('angular-route');
    var ngAnimate = require('angular-animate');
    var ngGettext = require('angular-gettext');

    // create the module and name it scotchApp
    var appModule = angular.module('angularTranslationApp', [ngRoute, ngAnimate, ngGettext]);



    require('./constants')(appModule);
    require('./services')(appModule);
    require('./config')(appModule);
    require('./controller')(appModule);
    // require('./directives')(appModule);

    console.log(appModule);

    // Export the application module so that it can be required by other components
    return {
        app: appModule
    };

}();

