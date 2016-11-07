/**
 * Routing configuration
 *
 * This will return the module configuration for routing.
 *
 * @return {Object} Contains config  properties for angulars config() module methods
 */
module.exports = (function () {
    "use strict";

    /**
     * The routing configurator
     *
     * @param {$routeProvider} $routeProvider
     * @param {$locationProvider} $locationProvider
     * @param {CONSTANTS} CONSTANTS
     */
    function ConfigureRouting($routeProvider, $locationProvider, CONSTANTS) {

        var TEMPLATES = CONSTANTS.ROUTING.TEMPLATES,
            URLS = CONSTANTS.ROUTING.URLS,
            CONTROLLER = CONSTANTS.CONTROLLER;

        $locationProvider.html5Mode(true).hashPrefix('!'); //the hashPrefix is for SEO

        $routeProvider
            // route for the about page
            .when(URLS.ABOUT, {
                templateUrl: TEMPLATES.ABOUT,
                controller: CONTROLLER.ABOUT
            })
            // route for the contact page
            .when(URLS.CONTACT, {
                templateUrl: TEMPLATES.CONTACT,
                controller: CONTROLLER.CONTACT
            })
            // route for the home page
            .otherwise({
                //home page
            });

    }

    ConfigureRouting.$inject = ['$routeProvider', '$locationProvider', 'CONSTANTS'];

    return {
        config: ConfigureRouting
    };
})();
