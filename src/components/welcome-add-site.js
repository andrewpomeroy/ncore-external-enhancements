import template from "./welcome-add-site.html";

export default {
  bindings: {},
  template: template,
  require: {
    "welcomeContext": "^",
  },
  controller: controller
};

controller.$inject = ['$state']
function controller($state) {
  this.$postLink = function () {
  }

  this.goToNew = function () {
    $state.go('site.submissions.forms')
  }
  this.goToExisting = function () {
    $state.go('.existing');
  }
}