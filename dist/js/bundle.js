(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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




},{"./factories/Demo.factory":2,"./polyfills":4}],2:[function(require,module,exports){
/**
 * Created by mpeters on 28.04.16.
 */

"use strict";

module.exports  = {
    
    doSomeFactoryStuff: function (stuff) {

        for (var i = 0; i < stuff.length; i++) {
            var obj = stuff[i];
            console.log(obj)
        }
    },
    
    doOtherFactoryStuff: function (otherStuff) {

        for (var i = 0; i < otherStuff.length; i++) {
            var obj = otherStuff[i];

            console.log(obj)
        }
    }
};

},{}],3:[function(require,module,exports){

var method;
var noop = function () {
};
var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
];
var length = methods.length;
var console = (window.console = window.console || {});

while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}

},{}],4:[function(require,module,exports){
/**
 * Created by milan on 09.06.15.
 */

'use strict';

//require polyfills you need!

require('./Console');
// require('./QuerySelector');
// require('./es5shim');
// require('./es5sham');
// require('./Raf');
// require('./ClassList');


},{"./Console":3}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2ZhY3Rvcmllcy9EZW1vLmZhY3RvcnkuanMiLCJzcmMvanMvcG9seWZpbGxzL0NvbnNvbGUuanMiLCJzcmMvanMvcG9seWZpbGxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1wZXRlcnMgb24gMTAuMDIuMTYuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBGaXJzdCBpbmNsdWRlIHBvbGx5ZmlsbHNcbiAgICByZXF1aXJlKCcuL3BvbHlmaWxscycpO1xuXG4gICAgLy8gZnJvbSBoZXJlIGluY2x1ZGUgZXZlcnl0aGluZyBlbHNlXG4gICAgdmFyIGZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3Rvcmllcy9EZW1vLmZhY3RvcnknKTtcbiAgICB2YXIgc3R1ZmYgPSBbMSwyLDMsNCw1XTtcblxuXG4gICAgZmFjdG9yeS5kb1NvbWVGYWN0b3J5U3R1ZmYoc3R1ZmYpO1xuXG4gICAgXG4gICAgY29uc29sZS5sb2coJ25ldyBiYXNlIHByb2plY3QnKTtcbiAgICBcbiAgICBcbn0oKSk7XG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbXBldGVycyBvbiAyOC4wNC4xNi5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgID0ge1xuICAgIFxuICAgIGRvU29tZUZhY3RvcnlTdHVmZjogZnVuY3Rpb24gKHN0dWZmKSB7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHVmZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHN0dWZmW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBkb090aGVyRmFjdG9yeVN0dWZmOiBmdW5jdGlvbiAob3RoZXJTdHVmZikge1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3RoZXJTdHVmZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9iaiA9IG90aGVyU3R1ZmZbaV07XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJcbnZhciBtZXRob2Q7XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcbn07XG52YXIgbWV0aG9kcyA9IFtcbiAgICAnYXNzZXJ0JywgJ2NsZWFyJywgJ2NvdW50JywgJ2RlYnVnJywgJ2RpcicsICdkaXJ4bWwnLCAnZXJyb3InLFxuICAgICdleGNlcHRpb24nLCAnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnLCAnaW5mbycsICdsb2cnLFxuICAgICdtYXJrVGltZWxpbmUnLCAncHJvZmlsZScsICdwcm9maWxlRW5kJywgJ3RhYmxlJywgJ3RpbWUnLCAndGltZUVuZCcsXG4gICAgJ3RpbWVTdGFtcCcsICd0cmFjZScsICd3YXJuJ1xuXTtcbnZhciBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcbnZhciBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pO1xuXG53aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBtZXRob2QgPSBtZXRob2RzW2xlbmd0aF07XG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgY29uc29sZVttZXRob2RdID0gbm9vcDtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbWlsYW4gb24gMDkuMDYuMTUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vL3JlcXVpcmUgcG9seWZpbGxzIHlvdSBuZWVkIVxuXG5yZXF1aXJlKCcuL0NvbnNvbGUnKTtcbi8vIHJlcXVpcmUoJy4vUXVlcnlTZWxlY3RvcicpO1xuLy8gcmVxdWlyZSgnLi9lczVzaGltJyk7XG4vLyByZXF1aXJlKCcuL2VzNXNoYW0nKTtcbi8vIHJlcXVpcmUoJy4vUmFmJyk7XG4vLyByZXF1aXJlKCcuL0NsYXNzTGlzdCcpO1xuXG4iXX0=
