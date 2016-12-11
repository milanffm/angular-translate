/**
 * Created by Milan on 03.11.2015
 */
'use strict';

module.exports = function(appModule) {

    appModule.factory('TestService', [ function() {

        var _all = [];

        return {
            register: function (id, el) {
                _all.push({id:id, el:el})
            },
            getAll: function(){
                return _all;
            },
            getById: function(id){

                for (var i = 0; i < _all.length; i++) {
                    console.log(_all[i]);
                    if (_all[i].id == id) {
                        return _all[i];
                    }
                }
            }
        };

    } ]);
};
