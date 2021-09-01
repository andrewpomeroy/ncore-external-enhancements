import angular from "angular";
import mockRestService from "../mockRestService";
import permitChangeForms from "../permitChangeForms";
import permits from "../permits";
import template from "./permit-change-forms-select-site.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: PermitChangeFormsSelectFormCtrl,
};

PermitChangeFormsSelectFormCtrl.$inject = ["$scope", "$state", "$stateParams", "mockRestService"];
function PermitChangeFormsSelectFormCtrl($scope, $state, $stateParams, mockRestService) {
  const $ctrl = this;

  $ctrl.selectAllSites = function () {
    console.log("selectall");
    $state.go("^.selectPermit");
  };

  $ctrl.selectSite = function (site) {
    console.log(site);
    $state.go("^.selectPermit", { siteId: site.id });
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
    // I'm guessing these will already be loaded in the real app, but this call
    // will have to be replaced by a separate call to pull the
    // permit-change-forms available to each site (since our fake site data has
    // these shoved in there as a property for convenience)

    mockRestService.getWithDelay(permitChangeForms).then(function (forms) {
      $ctrl.sitesWithAvailableForms = $ctrl.sites
        .filter(function (site) {
          return forms.find(function (form) {
            return form.siteId === site.siteId;
          });
        })
        .map(function (site) {
          return {
            name: site.siteName,
            id: site.siteId,
          };
        });
      // If there's only one viable option, this screen becomes redundant, we we'll skip it.
      if ($ctrl.sitesWithAvailableForms.length === 1) {
        $ctrl.selectAllSites();
      }
      $ctrl.isLoading = false;
    });
  };
}
