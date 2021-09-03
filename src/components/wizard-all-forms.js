import permitChangeForms from "../permitChangeForms";
import permitApplicationForms from "../permitApplicationForms";
import template from "./wizard-all-forms.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: WizardAllFormsCtrl,
};

WizardAllFormsCtrl.$inject = ["$scope", "$state", "$stateParams", "mockRestService"];
function WizardAllFormsCtrl($scope, $state, $stateParams, mockRestService) {
  const $ctrl = this;

  $ctrl.select = function (item, collection) {
    console.log(item);
    switch (collection) {
      case "appForms":
        alert("starting form:\n" + JSON.stringify(item, null, 2));
        break;
      case "changeForms":
        // console.log($ctrl.newFormWizardContext.selectedSite);
        break;
      default:
        break;
    }
  };

  Object.defineProperties($ctrl, {
    site: {
      get: function () {
        return (
          $stateParams.siteId &&
          $ctrl.sites &&
          $ctrl.sites.find(function (site) {
            return site.siteId === $stateParams.siteId;
          })
        );
      },
    },
    sites: {
      get: function () {
        return $ctrl.newFormWizardContext.sites;
      },
    },
  });

  $ctrl.$onInit = function () {
    $ctrl.isLoading = true;
    $ctrl.formCollections = {};

    Promise.all([mockRestService.getWithDelay(permitApplicationForms), mockRestService.getWithDelay(permitChangeForms)]).then((results) => {
      console.log(results);
      $ctrl.formCollections.appForms = results[0];
      $ctrl.formCollections.changeForms = results[1];
      $ctrl.isLoading = false;
      $scope.$apply();
    });
  };
}
