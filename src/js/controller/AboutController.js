/**
 * Controller for the home site
 *
 * @returns {Function}
 */

module.exports = (function() {
    "use strict";

    var AboutController = function ($scope) {
        $scope.message = 'About Page';
    };

    AboutController.$inject = ['$scope'];

    return AboutController;
})();