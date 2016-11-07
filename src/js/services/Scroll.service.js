/**
 * Created by Milan on 03.11.2015.
 */
'use strict';


module.exports  = function(appModule) {

    appModule.factory('ScrollService', ['CONSTANTS', 'gsap', 'offset', function(CONSTANTS, gsap, offset) {

        require('./../../../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin');

        var SCROLL_DIRECTIONS = CONSTANTS.SCROLL_DIRECTIONS;

        var DEFAULTS = {
        
            offset: 120,
            duration: 0.4,
            easeFn: Power2.easeInOut
        };
        
        var globalScope = window;

        return {
    
            scrollIntoView: function(element, scope, options) {
        
                console.log('should scroll to', element)
        
                options = options || DEFAULTS;
                scope = scope || globalScope;

                gsap.to(
                    scope,
                    options.duration,
                    {
                        scrollTo: {
                            y: offset(element).top - options.offset
                        },
                        ease: options.easeFn
                    }
                );
            },
        
            scrollToTop: function(scope, options) {
        
                options = options || DEFAULTS;
                scope = scope || globalScope;

                gsap.to(
                    scope,
                    options.duration,
                    {
                        scrollTo: {
                            y: 0
                        },
                        ease: options.easeFn
                    }
                );
            },
        
            scrollToBottom: function(scope, options) {
        
                options = options || DEFAULTS;
                scope = scope || globalScope;

                gsap.to(
                    scope,
                    options.duration,
                    {
                        scrollTo: {
                            y: scope.innerHeight
                        },
                        ease: options.easeFn
                    }
                );
            },
        
            getWindowScroll: function () {
        
                var scrollX = 0, scrollY = 0;
                if (typeof( window.pageYOffset ) == 'number') { // Netscape
                    scrollY = window.pageYOffset;
                    scrollX = window.pageXOffset;
                }
                else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { // DOM
                    scrollY = document.body.scrollTop;
                    scrollX = document.body.scrollLeft;
                }
                else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { // IE6
                    scrollY = document.documentElement.scrollTop;
                    scrollX = document.documentElement.scrollLeft;
                }
                return {
                    x: scrollX,
                    y: scrollY
                };
            },
        
            getScrollDirection: function (e){
        
                if (!e) {
                    return
                }
        
                var scrollDirection = (e.y || globalScope.pageYOffset) - globalScope.pageYOffset;
        
                e.y = globalScope.pageYOffset;
        
                return !scrollDirection ? SCROLL_DIRECTIONS.NONE : scrollDirection > 0 ? SCROLL_DIRECTIONS.UP : SCROLL_DIRECTIONS.DOWN;
        
            }
        };

    } ]);

};

