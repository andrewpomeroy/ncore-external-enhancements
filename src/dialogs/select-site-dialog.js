import selectSiteTemplate from "./select-site-dialog.html";

const getselectSiteDialog = function ($scope, $mdDialog, sites) {
  $scope.sites = sites;
  console.log(sites);
  return function (event) {
    return $mdDialog.show({
      controller: DialogController,
      bindToController: true,
      controllerAs: "$ctrl",
      template: selectSiteTemplate,
      // parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: true,
      locals: {
        sites: sites,
      },
    });
  };
};

DialogController.$inject = ["$scope", "$mdDialog", "sites"];
function DialogController($scope, $mdDialog, sites) {
  var $ctrl = this;
  $ctrl.sites = sites;

  $ctrl.model = {
    userInputText: "",
    siteId: null,
    metadata: {
      userInputText: {
        typeName: "String",
        label: "User Input Text",
        maxLength: 255,
      },
    },
  };

  $scope.$watch(
    function () {
      return $ctrl.model.siteId;
    },
    function (newValue, oldValue) {
      if (newValue === "0") {
        $ctrl.isNewSite = true;
        $ctrl.model.userInputText = "";
      } else if (newValue && newValue != 0) {
        $ctrl.isNewSite = false;
      }
      // $ctrl.model.v$info.v$forceValidation();
    }
  );

  $ctrl.confirm = function (id) {
    $mdDialog.hide(id);
  };
  $ctrl.cancel = $mdDialog.cancel;
}

export default getselectSiteDialog;
