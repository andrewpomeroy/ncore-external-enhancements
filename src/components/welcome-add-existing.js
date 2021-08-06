import template from "./welcome-add-existing.html";

export default {
  bindings: {},
  template: template,
  require: {
    "welcomeContext": "^",
  },
  controller: controller
};

function controller() {
  this.$postLink = function () {
  }
}