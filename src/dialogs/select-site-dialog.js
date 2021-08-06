import selectSiteTemplate from "./select-site-dialog.html";

const getselectSiteDialog = function ($scope, $mdDialog) {
  return function (event) {
    $mdDialog.show({
      controller: DialogController,
      // templateUrl: 'dialog1.tmpl.html',
      template: selectSiteTemplate,
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application to prevent interaction outside of dialog
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true,
      fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
    });
  };
};

function DialogController() {
  console.log("whatever");
}

export default getselectSiteDialog;
