/**
 * Created by Milan on 03.11.2015.
 */
'use strict';

module.exports  = function(appModule) {

    appModule.factory('WindowService', ['ScrollService', 'ViewService', 'assign', 'EventEmitter', function(ScrollService, ViewService, assign, EventEmitter) {

        var windowScope = window;

        var _properties = {
            scrollX: null,
            scrollY: null,
            width: null,
            height: null,
            scrollDirection: null,
            rotation: null
        };
        
        var fps = 60,
            interval = 1000 / fps,
            now,
            then = Date.now(),
            delta;


        var _calcScroll = function () {

            var position = ScrollService.getWindowScroll();

            console.log(_properties.scrollDirection);
            _properties.scrollX = position.x;
            _properties.scrollY = position.y;

            _properties.scrollDirection = ScrollService.getScrollDirection(this);
        };

        var _calcResize = function () {

            var dimensions = ViewService.getSize();
            _properties.width = dimensions.width;
            _properties.height = dimensions.height;
        };

        var _initializeEvents = function () {

            windowScope.addEventListener(WindowService.EVENTS.SCROLL, function (e) {

                WindowService._emitWindowEvent(WindowService.EVENTS.SCROLL, e, _calcScroll);

            }, false);

            windowScope.addEventListener(WindowService.EVENTS.RESIZE, function (e) {

                WindowService._emitWindowEvent(WindowService.EVENTS.RESIZE, e, _calcResize);

            }, false);


        };

        var WindowService = assign({
        
            EVENTS: {
                SCROLL: 'scroll',
                RESIZE: 'resize'
            },
        
            _emitOnFrame: function (event, e, fn) {
        
                now = Date.now();
                delta = now - then;
        
                if (delta > interval) {
                    then = now - (delta % interval);
                    fn.call(this);
                    this.emit(event, e, _properties)
                }
            },
        
            _emitWindowEvent: function (event, e, fn) {
                //console.info('EMIT', event, e, fn)
                requestAnimationFrame(this._emitOnFrame.bind(this, event, e, fn));
            },

            // Public Functions ====================================
        
            getProperties: function () {
                return _properties;
            },
        
            getCurrentBreakpoint: function () {
                return _properties.breakpoint;
            },
        
            addWindowEventListener: function (event, fn) {
                this.on(event, fn);
            },
        
            removeWindowEventListener: function (event, fn) {
                this.removeEventListener(event, fn);
            },
        
            initialize: function () {
                _calcScroll();
                _calcResize();
                _initializeEvents();
            }
        
        
        }, EventEmitter.prototype);


        WindowService.initialize();
    
        return WindowService;

    } ]);

};
