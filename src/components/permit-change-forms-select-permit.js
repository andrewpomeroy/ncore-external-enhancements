import permits from "../permits";
import template from "./permit-change-forms-select-permit.html";

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

  $ctrl.selectPermit = function (permitId) {
    console.log(permitId);
    // console.log(permit);
    // console.log(permit.id);
    // $state.go(".selectForm", { permitId: permit.id });
  };

  // Don't add site name if there's a site selected (no need to differentiate), or if no site matches the permit
  function formatPermitTitle(permit) {
    if ($ctrl.site) return permit.permitType;
    var site = $ctrl.newFormWizardContext.sites.find((site) => site.siteId === permit.siteId);
    console.log(site);
    return site ? site.siteName + " – " + permit.permitType : permit.permitType;
  }

  $ctrl.$onInit = function () {
    $ctrl.isLoading = true;
    mockRestService.getWithDelay(permits).then(function (result) {
      $ctrl.permits = result
        .filter(function (permit) {
          // Don't filter by site if no site selected
          return !$ctrl.site || $ctrl.site.siteId === permit.siteId;
        })
        .map(function (permit) {
          return {
            name: formatPermitTitle(permit),
            description: permit.permitNumber,
            id: permit.id,
          };
        });
      console.log($ctrl.permits);
      $ctrl.isLoading = false;
    });
  };
}
