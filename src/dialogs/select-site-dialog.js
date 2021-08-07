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

DialogController.$inject = ["$mdDialog", "sites"];
function DialogController($mdDialog, sites) {
  var $ctrl = this;
  $ctrl.sites = sites;

  $ctrl.confirm = $mdDialog.hide;
  $ctrl.cancel = $mdDialog.cancel;
}

export default getselectSiteDialog;
