import permitChangeForms from "../permitChangeForms";
import permits from "../permits";
import template from "./new-form-wizard-permit-change.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: PermitChangeFormsCtrl,
};

PermitChangeFormsCtrl.$inject = ["$scope", "$state", "$stateParams", "mockRestService"];
function PermitChangeFormsCtrl($scope, $state, $stateParams, mockRestService) {
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

  $ctrl.selectPermit = function (permit) {
    console.log(permit);
    console.log(permit.id);
    $state.go(".selectForm", { permitId: permit.id });
  };

  $ctrl.$onInit = function () {
    $ctrl.isLoading = true;
    mockRestService.getWithDelay(permits).then(function (result) {
      console.log($ctrl.site.permits);
      $ctrl.permits = result
        .filter(function (permit) {
          // Don't filter by site if no site selected
          return !$ctrl.site || $ctrl.site.siteId === permit.siteId;
        })
        .map(function (permit) {
          return {
            name: permit.permitType,
            description: permit.permitNumber,
            id: permit.id,
          };
        });
      $ctrl.isLoading = false;
    });
  };
}
