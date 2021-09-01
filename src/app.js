import angular from "angular";
import "angular-animate";
import "angular-material";
import "@uirouter/angularjs";

import MockController from "./mock-controller.js";

import startNewFormLayout from "./components/start-new-form-layout";
import newFormWizardContext from "./components/new-form-wizard-context";
import newFormWizard from "./components/new-form-wizard";
import newFormWizardNewPermit from "./components/new-form-wizard-new-permit";
import permitChangeForms from "./components/permit-change-forms";
import permitChangeFormsSelectPermit from "./components/permit-change-forms-select-permit";
import permitChangeFormsSelectForm from "./components/permit-change-forms-select-form";
import permitChangeFormsSelectSite from "./components/permit-change-forms-select-site";
import wizardFormList from "./components/wizard-form-list";
import wizardActionBlock from "./components/wizard-action-block";
import wizardActionBlockChevron from "./components/wizard-action-block-chevron";

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
              <new-form-wizard-context sites="sites" selected-site="selectedSite" has-licenses="hasLicenses" incident-form-examples="incidentFormExamples" is-internal-user="isInternal">
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
      // This route is a gateway, its component `permit-change-forms`
      // encapsulates logic that redirects the user based on the state of their
      // profile and current site selection
      {
        name: "startNewForm.permitChangeForms",
        url: "/permit-change-forms",
        views: {
          "startNewFormMain@startNewForm": {
            template: "<permit-change-forms></permit-change-forms>",
          },
        },
      },
      {
        name: "startNewForm.permitChangeForms.selectSite",
        url: "/select-site",
        newFormWizardData: {
          title: "Permit Change Forms",
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<permit-change-forms-select-site></permit-change-forms-select-site>",
          },
        },
      },
      {
        name: "startNewForm.permitChangeForms.selectPermit",
        url: "/select-permit?siteId",
        newFormWizardData: {
          title: "Permit Change Forms — Select Permit",
        },
        views: {
          "startNewFormMain@startNewForm": {
            template: "<permit-change-forms-select-permit></permit-change-forms-select-permit>",
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
            template: "<permit-change-forms-select-form></permit-change-forms-select-form>",
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
angular.module("app").component("permitChangeForms", permitChangeForms);
angular.module("app").component("permitChangeFormsSelectPermit", permitChangeFormsSelectPermit);
angular.module("app").component("permitChangeFormsSelectForm", permitChangeFormsSelectForm);
angular.module("app").component("permitChangeFormsSelectSite", permitChangeFormsSelectSite);
angular.module("app").component("wizardFormList", wizardFormList);
angular.module("app").component("wizardActionBlock", wizardActionBlock);
angular.module("app").component("wizardActionBlockChevron", wizardActionBlockChevron);

angular.module("app").factory("mockRestService", mockRestService);
