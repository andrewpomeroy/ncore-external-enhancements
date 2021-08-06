import themeConfig from './themeConfig';
import sites from './sites';
import user from './user';

controller.$inject = ['$scope'];

function controller($scope) {

  $scope.$watch('siteCount', function (newValue, oldValue) {
    if (newValue && parseInt(newValue).toString() === newValue) {
      $scope.sites = sites.slice(0, parseInt(newValue));
    }
    else if (newValue === "many") {
      $scope.sites = sites;
    }
    if ($scope.sites.length) {
      $scope.selectedSite = sites[0];
    }
    else {
      $scope.selectedSite = null;
    }
  })

  $scope.agencyName = "egle";
  $scope.siteCount = "0";
  // $scope.username = "Bill Rensmith";
  $scope.user = user;
  $scope.themeConfig = themeConfig;
  $scope.multipleSiteCategories = false;

}

export default controller;