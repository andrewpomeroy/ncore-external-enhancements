import angular from "angular";
import template from "./new-form-wizard.html";

export default {
  bindings: {},
  template: template,
  require: {
    "newFormWizardContext": "^",
  },
  controller: Controller
};

function Controller () {
  const $ctrl = this;

  $ctrl.select = (state) => {
    $ctrl.currentState = state;
  }

  $ctrl.$onInit = () => {
    $ctrl.currentState = 'landing';
  }
}
