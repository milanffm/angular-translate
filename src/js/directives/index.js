/**
 * Controller provider for KentBaronBrown
 */

"use strict";

module.exports = function(appModule)
{
    'use strict';

    appModule.directive( 'languageSwitcher', require('./languageSwitcher'));

};
