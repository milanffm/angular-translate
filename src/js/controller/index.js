/**
 * Controller provider for KentBaronBrown
 */

"use strict";

// Export the controller provider
module.exports = function(appModule) {
    
    //todo find a way to insert CONSTANTS here ..
    var CONTROLLER = require('./../constants/CONSTANTS').CONTROLLER;

    appModule.controller(CONTROLLER.CONTACT, require('./ContactController'));
    appModule.controller(CONTROLLER.ABOUT, require('./AboutController'));
};

