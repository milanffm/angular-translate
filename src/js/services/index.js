/**
 * Service index file
 */

module.exports = function(appModule) {

    appModule.constant('lodash', require('lodash'));
    appModule.constant('gsap', require('gsap'));
    appModule.constant('offset', require('document-offset'));
    appModule.constant('assign', require('object-assign'));
    appModule.constant('EventEmitter', require('events').EventEmitter);
    
    require('./Scroll.service')(appModule);
    require('./Viewport.service')(appModule);
    require('./Window.service')(appModule);
    require('./test.service')(appModule);

};
