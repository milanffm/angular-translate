/**
 * Created by mpeters on 25.09.16.
 */

"use strict";

var CONSTANTS = require('./CONSTANTS');

module.exports = function (appModule) {
    appModule.constant('CONSTANTS', CONSTANTS);
};
