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
