// This is a render-less encapsulation of gateway logic to redirect a user to
// one of two different entry-points in the permit change form selection flow

export default {
  bindings: {},
  require: {
    newFormWizardContext: "^",
  },
  template: "",
  controller: PermitChangeFormsCtrl,
};

PermitChangeFormsCtrl.$inject = ["$scope", "$state"];
function PermitChangeFormsCtrl($scope, $state) {
  const $ctrl = this;

  $ctrl.$onInit = function () {
    // If a site is already selected, just show that particular site's available permits.
    if ($ctrl.newFormWizardContext.selectedSite) {
      $state.go(".selectPermit", { siteId: $ctrl.newFormWizardContext.selectedSite.siteId }, { replace: true });
    }
    // .. But if no site is already selected, we'll first give the user the oppportunity to select one if they choose to.
    $state.go(".selectSite", {}, { replace: true });
  };
}
