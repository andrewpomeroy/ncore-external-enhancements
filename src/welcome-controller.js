import themeConfig from "./themeConfig";
import sites from "./sites";
import user from "./user";

controller.$inject = ["$scope", "$stateParams"];

function controller($scope, $stateParams) {
  $scope.$watch("isInternal", function (newValue, oldValue) {
    if (newValue) {
      $scope.selectedSite = null;
      $scope.siteCount = "many";
      // $scope.siteCount = null;
    } else {
      $scope.selectedSite = _selectedSite;
      $scope.siteCount = _siteCount;
    }
  });

  $scope.$watch("siteCount", function (newValue, oldValue) {
    if (newValue !== null) {
      _siteCount = newValue;
    }
    if (newValue && parseInt(newValue).toString() === newValue) {
      $scope.sites = sites.slice(0, parseInt(newValue));
    } else if (newValue === "many") {
      $scope.sites = sites;
    }
    if (newValue !== oldValue && $scope.sites.length) {
      $scope.selectedSite = sites[0];
    } else {
      $scope.selectedSite = null;
    }
  });

  $scope.$watch("selectedSite", function (newValue, oldValue) {
    if (newValue !== null) {
      _selectedSite = newValue;
    }
    // if (newValue !== oldValue) {
    //   console.log($stateParams);
    // }
  });

  $scope.agencyName = "egle";
  $scope.siteCount = "many";
  $scope.selectedSite = null;
  var _siteCount = $scope.siteCount;
  var _selectedSite = $scope.selectedSite;

  $scope.user = user;
  $scope.themeConfig = themeConfig;
  $scope.multipleSiteCategories = false;
}

export default controller;
