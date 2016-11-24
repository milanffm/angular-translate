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
    var ngTranslation = require('angular-translate');
    var ngTranslateLoaderStaticFilse = require('angular-translate-loader-static-files');

    // create the module and name it scotchApp
    var appModule = angular.module('angularTranslationApp', [ngRoute, ngAnimate, ngTranslation]);

    angular.module('angularTranslationApp').config(function ($translateProvider) {
        $translateProvider.translations('de', {
                APP_HEADLINE:  'Großartige AngularJS App',
                NAV_HOME:      'Zur Startseite',
                NAV_ABOUT:     'Über',
                APP_TEXT:      'Irgendein Text über eine großartige AngularJS App.'
        });

        $translateProvider.translations('en', {
            APP_HEADLINE:  'awsome angular app',
            NAV_HOME:      'Zur Startseite',
            NAV_ABOUT:     'Über',
            APP_TEXT:      'Irgendein Text über eine großartige AngularJS App.'
        });
        // Nicht vergessen: die Standardsprache
        $translateProvider.preferredLanguage('de');
        $translateProvider.useSanitizeValueStrategy('escape');
    });

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

