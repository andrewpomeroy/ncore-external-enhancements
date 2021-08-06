import angular from "angular";
import "angular-animate";
import "angular-material";
import '@uirouter/angularjs';

import WelcomeController from './welcome-controller.js';

import welcomeLayout from "./components/welcome-layout";
import newFormWizardContext from "./components/new-form-wizard-context";
import newFormWizard from './components/new-form-wizard';
import welcomeAddSite from './components/welcome-add-site';
import welcomeAddExisting from './components/welcome-add-existing';
import welcomeVerificationCodeInfo from './components/welcome-verification-code-info';

angular.module("app", ['ui.router']).controller("WelcomeController", WelcomeController);

angular.module("app").config(['$locationProvider',
  function ($locationProvider) {
    // $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
  }
]);

angular.module("app").config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state({
      name: 'root',
      url: '/',
      redirectTo: 'welcome'
    })

    var welcomeStates = [
      {
        name: 'welcome',
        url: '/welcome',
        views: {
          '': {
            template: '' +
              '<div class="debug">' +
                '<label>' +
                  '<input type="checkbox" ng-model="isInternal" />' +
                  'Internal User' +
                '</label>' +
                '<div ng-if="!isInternal">' +
                  '<label>Site count</label>' +
                  '<select ng-model="$parent.siteCount">' +
                    '<option value="0">0</option>' +
                    '<option value="1">1</option>' +
                    '<option value="2">2</option>' +
                    '<option value="many" selected>Many</option>' +
                  '</select>' +
                '</div>' +
                // '<div>' +
                // '{{selectedSite}}' +
                // '</div>' +
                '<div>' +
                  '<label>Site</label>' +
                  '<select ng-if="sites.length" ng-model="$parent.selectedSite">' + 
                    '<option value="">&mdash; None &mdash;</option>' +
                    '<option ng-repeat="site in sites" ng-value="site">{{site.siteName}}</option>' +
                  '</select>' +
                '</div>' +
              '</div>' +
              '<new-form-wizard-context>' +
                '<welcome-layout>' +
                '</welcome-layout>' +
              '</new-form-wizard-context>',
            controller: 'WelcomeController',
          },
          'welcomeContent@welcome': {
            template: '<new-form-wizard></new-form-wizard>'
          }

        },
      },
      {
        name: 'welcome.add',
        url: '/add',
        views: {
          'welcomeContent@welcome': {
            template: '<welcome-add-site></welcome-add-site>'
          }
        },
      },
      {
        name: 'welcome.add.existing',
        url: '/existing',
        views: {
          'welcomeContent@welcome': {
            template: '<welcome-add-existing></welcome-add-existing>'
          }
        },
      }
    ];

    welcomeStates.forEach(function (state) {
      $stateProvider.state(state);
    })
  }
]);

angular.module("app").component("welcomeLayout", welcomeLayout);
angular.module("app").component("newFormWizardContext", newFormWizardContext);
angular.module("app").component("newFormWizard", newFormWizard);
angular.module("app").component("welcomeAddSite", welcomeAddSite);
angular.module("app").component("welcomeAddExisting", welcomeAddExisting);
angular.module("app").component("welcomeVerificationCodeInfo", welcomeVerificationCodeInfo);
