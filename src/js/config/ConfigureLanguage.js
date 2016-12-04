/**
 * Language configuration
 */
module.exports = (function () {
    "use strict";

    /**
     * The language configurator
     *
     * @param {CONSTANTS} CONSTANTS
     * @param {gettextCatalog} gettextCatalog
     */
    function ConfigureLanguage(CONSTANTS, gettextCatalog) {

        gettextCatalog.setCurrentLanguage('de_DE');
        gettextCatalog.debug = true;
        gettextCatalog.loadRemote("/dist/locales/de_DE.json");

        console.log(gettextCatalog.getCurrentLanguage());

    }

    ConfigureLanguage.$inject = ['CONSTANTS', 'gettextCatalog'];

    return ConfigureLanguage

})();
