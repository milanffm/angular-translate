/**
 * Controller for the home site
 *
 * @returns {Function}
 */

module.exports = (function() {
    "use strict";

    var ContactController = function ($scope) {
        $scope.message = 'Contact Page';

        console.log('CONTACT CONTROLLER ')
    };

    ContactController.$inject = ['$scope'];

    return ContactController;
})();