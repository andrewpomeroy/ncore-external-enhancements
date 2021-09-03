// mock theme config object, extracted from the ncore app (clientTheme)
import themeConfig from "./themeConfig";
// mock sites list (external user's sites)
import sites from "./sites";
// mock user object
import user from "./user";

controller.$inject = ["$scope", "$stateParams", "$timeout"];

function controller($scope, $stateParams, $timeout) {
  // Example of a client-specific registry of form types under the "incident types" umbrella, that would probably come from app config
  var incidentFormExampleTypes = {
    garbage: {
      displayName: "Garbage Burning",
    },
    fishKill: {
      displayName: "Fish Kill",
    },
  };

  // A few extra things to make sure our "debug" controls propagate the necessary state changes when interacted with:

  $scope.$watch("isInternal", function (newValue, oldValue) {
    if (newValue) {
      $timeout(() => {
        $scope.selectedSite = null;
        $scope.siteCount = "many";
        if (!$scope.selectedSite) $scope.selectedSite = $scope.sites[0];
      });
    } else {
      // recall stored previous selections made prior to these controls being disabled
      $timeout(() => {
        $scope.selectedSite = _selectedSite;
        $scope.siteCount = _siteCount;
      });
    }
  });
  $scope.$watch("siteCount", function (newValue, oldValue) {
    if (newValue !== null) {
      // store value for later recall, in case this control is disabled and then re-enabled
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
      // store value for later recall, in case this control is disabled and then re-enabled
      _selectedSite = newValue;
    }
  });
  $scope.$watch("selectedIncidentFormExampleTypes", function (newValue, oldValue) {
    if (newValue || !newValue.length) {
      $scope.incidentFormExamples = null;
    }
    $scope.incidentFormExamples = Array.from(eval(newValue).map((key) => incidentFormExampleTypes[key].displayName));
  });

  // initializing example debug controls states
  $scope.agencyName = "egle";
  $scope.siteCount = "many";
  $scope.hasComplaintForm = true;
  $scope.selectedIncidentFormExampleTypes = ["garbage", "fishKill"];
  $scope.selectedSite = null;
  var _siteCount = $scope.siteCount;
  var _selectedSite = $scope.selectedSite;

  $scope.user = user;
  $scope.themeConfig = themeConfig;
  $scope.multipleSiteCategories = false;
}

export default controller;
