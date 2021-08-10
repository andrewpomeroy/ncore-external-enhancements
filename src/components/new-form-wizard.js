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
    // Don't prompt for site selection if there's already a site selected in the site-menu
    // Except when in single-site mode (otherwise there's no way to create a new site w/ an application)
    if (!$ctrl.newFormWizardContext.selectedSite || $ctrl.newFormWizardContext.sites.length === 1) {
      getSelectSiteDialog(
        $scope,
        $mdDialog,
        $ctrl.newFormWizardContext.sites
      )(event).then(
        function (siteId) {
          $state.go(".newPermit", { siteId: siteId });
        },
        function (cancelVal) {
          console.log(cancelVal);
        }
      );
    } else {
      $state.go(".newPermit", { siteId: $ctrl.newFormWizardContext.selectedSite.siteId });
    }
  };

  $ctrl.$onInit = () => {
    $ctrl.currentState = "landing";
  };
}
