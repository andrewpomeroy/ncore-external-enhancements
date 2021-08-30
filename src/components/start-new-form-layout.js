import angular from "angular";
import template from "./start-new-form-layout.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: controller,
};

controller.$inject = ["$scope", "$interpolate"];
function controller($scope, $interpolate) {
  var $ctrl = this;

  $ctrl.interpolate = function (str) {
    return $interpolate(str)($scope);
  };

  this.$postLink = function () {};
}
