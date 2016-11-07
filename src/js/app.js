/**
 * Created by mpeters on 10.02.16.
 */

module.exports = (function() {
    "use strict";

    // First include pollyfills
    require('./polyfills');

    // from here include everything else
    var factory = require('./factories/Demo.factory');
    var stuff = [1,2,3,4,5];


    factory.doSomeFactoryStuff(stuff);

    
    console.log('new base project');
    
    
}());



