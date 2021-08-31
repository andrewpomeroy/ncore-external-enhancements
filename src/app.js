import angular from "angular";
import "angular-animate";
import "angular-material";
import "@uirouter/angularjs";

import MockController from "./mock-controller.js";

import startNewFormLayout from "./components/start-new-form-layout";
import newFormWizardContext from "./components/new-form-wizard-context";
import newFormWizard from "./components/new-form-wizard";
import newFormWizardNewPermit from "./components/new-form-wizard-new-permit";
import newFormWizardPermitChange from "./components/new-form-wizard-permit-change";
import newFormWizardPermitChangeSelectForm from "./components/new-form-wizard-permit-change-select-form";
import wizardFormList from "./components/wizard-form-list";

import mockRestService from "./mockRestService";

angular.module("app", ["ui.router", "ngAnimate", "ngAria", "ngMaterial"]).controller("MockController", MockController);

angular.module("app").config([
  "$locationProvider",
  "$urlRouterProvider",
  function ($locationProvider, $urlRouterProvider) {
    // $locationProvider.hashPrefix("!");
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true,
    });
    // $urlRouterProvider.otherwise("/");
  },
]);

angular.module("app").config([
  "$stateProvider",
  function ($stateProvider) {
    $stateProvider.state({
      name: "exampleRoot",
      url: "/",
      redirectTo: "startNewForm",
    });

    var startNewFormStates = [
      {
        name: "startNewForm",
        url: "/start-new-form",
        newFormWizardData: {
          title: "Start New Form",
        },
        views: {
          "": {
            template: `
              <div class="debug">
                <label class='control-label'>
                  <input type="checkbox" ng-model="isInternal" />
                  Internal User
                </label>
                <!-- <label class="control-label">
                  <input type="checkbox" ng-model="hasComplaintForm" />
                  Has complaint form
                </label> -->
                <label class="control-label">
                  <input type="checkbox" ng-model="hasLicenses" />
                  Has Licenses
                </label>
                <label class='control-label'>Incident form examples</label>
                <select class="form-control" ng-model="selectedIncidentFormExampleTypes">
                  <option value="">None</option>
                  <option value="['garbage']">Garbage Burning</option>
                  <option value="['fishKill']">Fish Kill</option>
                  <option value="['garbage', 'fishKill']">Garbage Burning & Fish Kill</option>
                </select>
                <div ng-if="!isInternal">
                  <label class='control-label'>Site count</label>
                  <select class="form-control" ng-model="$parent.siteCount">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="many" selected>Many</option>
                  </select>
                </div>
                <div>
                  <label class='control-label'>Site</label>
                  <select class="form-control" ng-if="sites.length" ng-model="$parent.selectedSite">
                    <option value="">(All)</option>
                    <option ng-repeat="site in sites" ng-value="site">{{site.siteName}}</option>
                  </select>
                </div>
              </div>
              <new-form-wizard-context sites="sites" selected-site="selectedSite" has-licenses="hasLicenses" incident-form-examples="incidentFormExamples">
                <div ui-view='startNewFormContent'></div>
              </new-form-wizard-context>`,
            controller: "MockController",
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
        url: "/new-permit?siteId",
        newFormWizardData: {
          title: 'Apply for a New {{$ctrl.newFormWizardContext.hasLicenses ? "Permit or License" : "Permit"}}',
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<new-form-wizard-new-permit></new-form-wizard-new-permit>",
          },
        },
      },
      {
        name: "startNewForm.permitChangeForms",
        url: "/permit-change-forms?siteId",
        newFormWizardData: {
          title: "Permit Change Forms — Select Permit",
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<new-form-wizard-permit-change></new-form-wizard-permit-change>",
          },
        },
      },
      {
        name: "startNewForm.permitChangeForms.selectForm",
        url: "/select-form?permitId",
        newFormWizardData: {
          title: "Select a Permit Change Form",
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<new-form-wizard-permit-change-select-form></new-form-wizard-permit-change-select-form>",
          },
        },
      },
      // {
      //   name: "startNewForm.newPermit.something",
      //   url: "/something",
      //   newFormWizardData: {
      //     title: "Something",
      //   },
      //   views: {
      //     "startNewFormMain@startNewForm": {
      //       template: "<h3>hello</h3>",
      //     },
      //   },
      // },
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
angular.module("app").component("newFormWizardPermitChange", newFormWizardPermitChange);
angular.module("app").component("newFormWizardPermitChangeSelectForm", newFormWizardPermitChangeSelectForm);
angular.module("app").component("wizardFormList", wizardFormList);

angular.module("app").factory("mockRestService", mockRestService);
