/**
 * Created by milan on 05.06.2016
 */


module.exports = (function () {
    'use strict';
    /**
     * Creates the language switch directive
     */

    var moment = require('moment');

    function SelectOrganisation(CONSTANTS, gettextCatalog) {

        return {
            restrict: 'AE',
            replace: true,
            controller: ['$scope',function (scope) {

                changeValues();

                scope.changeLanguage = function(lang){
                    gettextCatalog.setCurrentLanguage(lang);
                    changeValues();
                };

                function changeValues () {
                    scope.language = gettextCatalog.getCurrentLanguage();
                    scope.value = scope.language == 'en' ? 'de_DE' : 'en';
                    scope.text = scope.language == 'en' ? 'de' : 'en';
                }

            }],

            templateUrl: CONSTANTS.TEMPLATES.DIRECTIVES.LANGUAGE_SWITCHER
        };
    }

    SelectOrganisation.$inject = ['CONSTANTS', 'gettextCatalog'];


    return SelectOrganisation;
})();
