import angular from "angular";
import mockRestService from "../mockRestService";
import permitChangeForms from "../permitChangeForms";
import template from "./new-form-wizard-permit-change.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: PermitChangeFormsCtrl,
};

PermitChangeFormsCtrl.$inject = ["$scope", "$stateParams", "mockRestService"];
function PermitChangeFormsCtrl($scope, $stateParams, mockRestService) {
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

  $ctrl.startForm = function (form) {
    alert("starting form:\n" + JSON.stringify(form, null, 2));
  };

  $ctrl.$onInit = function () {
    $ctrl.isLoading = true;
    mockRestService.getWithDelay(permitChangeForms).then(function (result) {
      console.log($ctrl.site.permitChangeForms);
      if ($ctrl.site.permitChangeForms) {
        $ctrl.forms = $ctrl.site.permitChangeForms;
      } else {
        $ctrl.forms = result.map(function (form) {
          return {
            name: form.formName,
            description: form.formDescription,
          };
        });
      }
      $ctrl.isLoading = false;
    });
  };
}
