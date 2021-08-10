import angular from "angular";
import template from "./new-form-wizard-new-permit.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: Controller,
};

Controller.$inject = ["$scope", "$state", "$stateParams", "$mdDialog"];
function Controller($scope, $state, $stateParams, $mdDialog) {
  const $ctrl = this;

  Object.defineProperties($ctrl, {
    site: {
      get: function () {
        return (
          $stateParams.siteId &&
          $ctrl.newFormWizardContext.sites.find(function (site) {
            return site.siteId === $stateParams.siteId;
          })
        );
      },
    },
    filteredItems: {
      get: function () {
        if (!$ctrl.filter || !$ctrl.filter.length) return $ctrl.site.permits;
        return $ctrl.site.permits.filter(function (permit) {
          return [permit.name, permit.description].some(function (property) {
            return (
              property && typeof property === "string" && property.trim().toLowerCase().indexOf($ctrl.filter.trim().toLowerCase()) !== -1
            );
          });
        });
      },
    },
  });

  $ctrl.$onInit = () => {};
}
