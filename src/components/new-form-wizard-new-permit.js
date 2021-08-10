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
          $ctrl.newFormWizardContext.sites &&
          $ctrl.newFormWizardContext.sites.find(function (site) {
            return site.siteId === $stateParams.siteId;
          })
        );
      },
    },
  });

  $ctrl.startForm = function (form) {
    alert("starting form:\n" + JSON.stringify(form, null, 2));
  };
}
