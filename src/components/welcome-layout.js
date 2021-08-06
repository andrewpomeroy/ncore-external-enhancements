import angular from "angular";
import template from "./welcome-layout.html";

export default {
  bindings: {},
  template: template,
  require: {
    "welcomeContext": "^",
  },
  controller: controller
};

function controller () {
  this.$postLink = function() {
    if (this.welcomeContext) {
      console.log(this.welcomeContext);
    }
  }
}