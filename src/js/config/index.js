/**
 * Created by mpeters on 20.06.16.
 */

/**
 * Configures the KentBaronBrown angular module
 *
 * @return {Function}
 */
module.exports = function(appModule)
{
    "use strict";

    var routing = require('./ConfigureRouting.js');

    appModule.config(routing.config);

    // appModule.factory('templates', function() {
    //     return {
    //         homeSlider:   'templates/home-slider.html',
    //         detailSlider:  'templates/detail-slider.html'
    //     };
    // });
    
};