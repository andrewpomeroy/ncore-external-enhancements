export default {
  bindings: {
    sites: "<",
    selectedSite: "<",
    hasComplaintForm: "<",
    hasLicenses: "<",
    incidentFormExamples: "<",
    isInternalUser: "<",
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

  // Recursively look up tree to find the next available upward state, so that the
  // Back button will skip up the tree past non-viable "container" states
  function getNextViableParentState(state) {
    var parentState = state.parent;
    if (!parentState) return undefined;
    if (parentState.newFormWizardData) return parentState;
    return getNextViableParentState(parentState);
  }

  function updateNavigationContext() {
    $ctrl.currentTitle = $state.current.newFormWizardData && $state.current.newFormWizardData.title;
    var nextViableParentState = getNextViableParentState($state.$current);
    $ctrl.backSref = nextViableParentState && nextViableParentState.name;

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

  Object.defineProperties($ctrl, {
    formattedIncidentFormExamples: {
      get: function formattedIncidentFormExamples() {
        if (!$ctrl.incidentFormExamples || !$ctrl.incidentFormExamples.length) return null;
        return $ctrl.incidentFormExamples.join(", ");
      },
    },
    shouldShowComplaintIncidentForms: {
      get: function shouldShowComplaintIncidentForms() {
        return $ctrl.incidentFormExamples && $ctrl.incidentFormExamples.length;
      },
    },
  });

  $transitions.onSuccess({}, function (transition) {
    updateNavigationContext();
  });

  $ctrl.$onInit = function () {
    updateNavigationContext();
  };
}
