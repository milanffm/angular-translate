/**
 * Created by Milan on 03.11.2015
 */
'use strict';

module.exports = function(appModule) {

    appModule.factory('ViewService', [ function() {

        return {
            getSize: function () {
                var scope = window,
                    attr = 'inner';

                if ('innerWidth' in window) {
                    attr = 'client';
                    scope = document.documentElement || document.body;
                }

                return {
                    width: scope[attr + 'Width'],
                    height: scope[attr + 'Height']
                };
            }
        };

    } ]);
};
