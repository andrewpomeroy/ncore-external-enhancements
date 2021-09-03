/* global angular:true */
(function(global, angular, undefined) {
    "use strict";

    angular.module("app").component("loadingSpinner", {
        bindings: {
            isActive: "=",
            semiopaque: "=",
            noBg: "=",
            containerClasses: "@",
            ariaText: "@",
        },
        template:
            '<div role="status" aria-live="polite">' +
            '   <div class="loading-spinner section-loading-spinner {{$ctrl.containerClasses}}" ng-if="$ctrl.isActive" ng-class="{\'spinner--semiopaque\': $ctrl.semiopaque, \'spinner--noBg\': $ctrl.noBg}">' +
            '       <div class="spinner"></div>' +
            '       <span class="sr-only" ng-bind="$ctrl.ariaText || \'Loading\'"></span>' +
            "   </div>" +
            "</div>",
        controller: [
            "$scope",
            "$element",
            function($scope, $element) {
                var $ctrl = this;

                $scope.$watch("$ctrl.isActive", function(newValue, oldValue) {
                    if (newValue && !oldValue) {
                        $element.addClass("loading-spinner-component--is-active");
                    } else {
                        $element.removeClass("loading-spinner-component--is-active");
                    }
                });
            },
        ],
    });
})(this, angular);
