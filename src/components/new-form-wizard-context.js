export default {
  bindings: {
    sites: "<",
    selectedSite: "<",
    hasComplaintForm: "<",
    incidentFormExamples: "<",
    // themeConfig: '<',
    // multipleSiteCategories: '<'
  },
  controller: NewFormWizardContextController,
};

NewFormWizardContextController.$inject = ["$transitions", "$state"];
function NewFormWizardContextController($transitions, $state) {
  var $ctrl = this;

  $ctrl.breadcrumbItems = [];
  $ctrl.goBack = function () {
    $state.go($ctrl.backSref || ".");
  };

  function updateNavigationContext() {
    $ctrl.currentTitle = $state.current.newFormWizardData && $state.current.newFormWizardData.title;
    $ctrl.backSref = $state.$current.parent && $state.$current.parent.name;

    var breadcrumbItems = [];

    function crawlBreadcrumbParentTitles(parentState) {
      if (parentState.newFormWizardData && parentState.newFormWizardData.title) {
        breadcrumbItems.unshift({
          sref: parentState.name,
          title: parentState.newFormWizardData.title,
        });
      }
      if (parentState.parent) {
        return crawlBreadcrumbParentTitles(parentState.parent);
      }
      return breadcrumbItems;
    }

    $ctrl.breadcrumbItems = $state.$current.parent ? crawlBreadcrumbParentTitles($state.$current.parent) : [];
  }

  $ctrl.displayMultipleIncidentFormExamples = function () {
    return $ctrl.incidentFormExamples && $ctrl.incidentFormExamples.length > 1;
  };
  $ctrl.getFormattedIncidentFormExamples = function () {
    if (!$ctrl.incidentFormExamples || !$ctrl.incidentFormExamples.length) return;
    return $ctrl.incidentFormExamples.join(", ");
  };
  $ctrl.shouldShowComplaintIncidentForms = function () {
    return $ctrl.incidentFormExamples && $ctrl.incidentFormExamples.length;
  };

  $transitions.onSuccess({}, function (transition) {
    updateNavigationContext();
  });

  $ctrl.$onInit = function () {
    updateNavigationContext();
  };
}
