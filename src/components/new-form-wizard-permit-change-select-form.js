import angular from "angular";
import mockRestService from "../mockRestService";
import permitChangeForms from "../permitChangeForms";
import permits from "../permits";
import template from "./new-form-wizard-permit-change-select-form.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: PermitChangeFormsSelectFormCtrl,
};

PermitChangeFormsSelectFormCtrl.$inject = ["$scope", "$stateParams", "mockRestService"];
function PermitChangeFormsSelectFormCtrl($scope, $stateParams, mockRestService) {
  const $ctrl = this;

  Object.defineProperties($ctrl, {
    site: {
      get: function () {
        console.log($stateParams.siteId);
        return (
          $stateParams.siteId &&
          $ctrl.newFormWizardContext.sites &&
          $ctrl.newFormWizardContext.sites.find(function (site) {
            return site.siteId === $stateParams.siteId;
          })
        );
      },
    },
    permit: {
      get: function () {
        console.log($stateParams.permitId);
        return (
          $stateParams.permitId &&
          permits.find(function (permit) {
            return permit.id === $stateParams.permitId;
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
      console.log($ctrl.site);
      console.log($ctrl.site.permitChangeForms);
      if ($ctrl.site.permitChangeForms) {
        $ctrl.forms = $ctrl.site.permitChangeForms;
      } else {
        $ctrl.forms = result.map(function (form) {
          return {
            name: form.formName,
            description: form.formDescription,
            id: form.id,
          };
        });
      }
      $ctrl.isLoading = false;
    });
  };
}
