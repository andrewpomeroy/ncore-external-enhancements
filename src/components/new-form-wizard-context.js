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
  $transitions.onSuccess({}, function (transition) {
    // console.log($state.current.startNewFormHeader);
  });
}
