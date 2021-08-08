import angular from "angular";
import "angular-animate";
import "angular-material";
import "@uirouter/angularjs";

import WelcomeController from "./welcome-controller.js";

import startNewFormLayout from "./components/start-new-form-layout";
import newFormWizardContext from "./components/new-form-wizard-context";
import newFormWizard from "./components/new-form-wizard";
import newFormWizardNewPermit from "./components/new-form-wizard-new-permit";
import welcomeAddSite from "./components/welcome-add-site";
import welcomeAddExisting from "./components/welcome-add-existing";
import welcomeVerificationCodeInfo from "./components/welcome-verification-code-info";

angular.module("app", ["ui.router", "ngAnimate", "ngAria", "ngMaterial"]).controller("WelcomeController", WelcomeController);

angular.module("app").config([
  "$locationProvider",
  function ($locationProvider) {
    // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true,
    });
  },
]);

angular.module("app").config([
  "$stateProvider",
  function ($stateProvider) {
    $stateProvider.state({
      name: "root",
      url: "/",
      redirectTo: "startNewForm",
    });

    var startNewFormStates = [
      {
        name: "startNewForm",
        url: "/start-new-form",
        startNewFormHeader: {
          title: "Start New Form",
        },
        views: {
          "": {
            template:
              "" +
              '<div class="debug">' +
              "<label class='control-label'>" +
              '<input type="checkbox" ng-model="isInternal" />' +
              "Internal User" +
              "</label>" +
              '<div ng-if="!isInternal">' +
              "<label class='control-label'>Site count</label>" +
              '<select class="form-control" ng-model="$parent.siteCount">' +
              '<option value="0">0</option>' +
              '<option value="1">1</option>' +
              '<option value="2">2</option>' +
              '<option value="many" selected>Many</option>' +
              "</select>" +
              "</div>" +
              // '<div>' +
              // '{{selectedSite}}' +
              // '</div>' +
              "<div>" +
              "<label class='control-label'>Site</label>" +
              '<select class="form-control" ng-if="sites.length" ng-model="$parent.selectedSite">' +
              '<option value="">(All)</option>' +
              '<option ng-repeat="site in sites" ng-value="site">{{site.siteName}}</option>' +
              "</select>" +
              "</div>" +
              "</div>" +
              '<new-form-wizard-context sites="sites" selected-site="selectedSite">' +
              "<div ui-view='startNewFormContent'></div>" +
              "</new-form-wizard-context>",
            controller: "WelcomeController",
          },
          "startNewFormContent@.": {
            template: "<start-new-form-layout></start-new-form-layout>",
          },
          "startNewFormMain@.": {
            template: "<new-form-wizard></new-form-wizard>",
          },
        },
      },
      {
        name: "startNewForm.newPermit",
        url: "/new-permit",
        startNewFormHeader: {
          title: "New Permit Applications",
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<new-form-wizard-new-permit></new-form-wizard-new-permit>",
            // controller: [
            //   "$scope",
            //   "$state",
            //   function ($scope, $state) {
            //     console.log($state.current.data.one);
            //   },
            // ],
          },
        },
      },
    ];

    startNewFormStates.forEach(function (state) {
      $stateProvider.state(state);
    });
  },
]);

angular.module("app").component("startNewFormLayout", startNewFormLayout);
angular.module("app").component("newFormWizardContext", newFormWizardContext);
angular.module("app").component("newFormWizard", newFormWizard);
angular.module("app").component("newFormWizardNewPermit", newFormWizardNewPermit);
angular.module("app").component("welcomeAddSite", welcomeAddSite);
angular.module("app").component("welcomeAddExisting", welcomeAddExisting);
angular.module("app").component("welcomeVerificationCodeInfo", welcomeVerificationCodeInfo);
