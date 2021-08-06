import angular from "angular";
import template from "./new-form-wizard.html";
import getSelectSiteDialog from "../dialogs/select-site-dialog";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: Controller,
};

Controller.$inject = ["$scope", "$mdDialog"];
function Controller($scope, $mdDialog) {
  const $ctrl = this;

  $ctrl.selectSite = (event) => {
    getSelectSiteDialog($scope, $mdDialog)(event);
  };

  $ctrl.$onInit = () => {
    $ctrl.currentState = "landing";
  };
}
