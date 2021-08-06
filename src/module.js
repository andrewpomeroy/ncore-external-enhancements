import angular from "angular";
import "angular-animate";
import "angular-material";
import '@uirouter/angularjs';

import WelcomeController from './welcome-controller.js';

import welcomeLayout from "./components/welcome-layout";
import welcomeContext from "./components/welcome-context";
import welcomeLanding from './components/welcome-landing';
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
                  '<input type="checkbox" ng-model="multipleSiteCategories" />' +
                  'Multiple Site Categories' +
                '</label>' +
                '<div>' +
                  '<label>Site count</label>' +
                  '<select ng-model="siteCount">' +
                    '<option value="0" selected>0</option>' +
                    '<option value="1">1</option>' +
                    '<option value="2">2</option>' +
                    '<option value="many">Many</option>' +
                  '</select>' +
                '</div>' +
                // '<div>' +
                //   '<label></label>' +
                //   '<select ng-if="sites.length" ng-model="selectedSite">' + 
                //     '<option ng-value="" selected>&mdash; None &mdash;</option>' +
                //     '<option ng-repeat="site in sites" ng-value="site.id">{{site.siteName}}</option>' +
                //   '</select>' +
                // '</div>' +
              '</div>' +
              '<welcome-context sites="sites" user="user" theme-config="themeConfig" multiple-site-categories="multipleSiteCategories">' +
                '<welcome-layout>' +
                '</welcome-layout>' +
              '</welcome-context>',
            controller: 'WelcomeController',
          },
          'welcomeContent@welcome': {
            template: '<welcome-landing></welcome-landing>'
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
angular.module("app").component("welcomeContext", welcomeContext);
angular.module("app").component("welcomeLanding", welcomeLanding);
angular.module("app").component("welcomeAddSite", welcomeAddSite);
angular.module("app").component("welcomeAddExisting", welcomeAddExisting);
angular.module("app").component("welcomeVerificationCodeInfo", welcomeVerificationCodeInfo);
