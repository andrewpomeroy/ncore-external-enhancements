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

Controller.$inject = ["$scope", "$state", "$mdDialog"];
function Controller($scope, $state, $mdDialog) {
  const $ctrl = this;

  $ctrl.$onInit = () => {};
}
