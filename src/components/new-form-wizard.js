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

Controller.$inject = ["$scope", "$state", "$mdDialog"];
function Controller($scope, $state, $mdDialog) {
  const $ctrl = this;

  $ctrl.selectSite = (event) => {
    if (!$ctrl.newFormWizardContext.selectedSite) {
      getSelectSiteDialog(
        $scope,
        $mdDialog,
        $ctrl.newFormWizardContext.sites
      )(event).then(
        function (val) {
          console.log(val);
          console.log($state.current);
          $state.go(".newPermit", { siteId: val });
        },
        function (cancelVal) {
          console.log(cancelVal);
        }
      );
    }
  };

  $ctrl.$onInit = () => {
    $ctrl.currentState = "landing";
  };
}
