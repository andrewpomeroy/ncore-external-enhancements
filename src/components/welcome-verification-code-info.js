import template from "./welcome-verification-code-info.html";

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

}