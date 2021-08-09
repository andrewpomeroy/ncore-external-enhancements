export default {
  bindings: {
    sites: "<",
    selectedSite: "<",
    // user: '<',
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
    console.log($state.$current.parent);
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

  $transitions.onSuccess({}, function (transition) {
    updateNavigationContext();
  });

  $ctrl.$onInit = function () {
    updateNavigationContext();
  };
}
