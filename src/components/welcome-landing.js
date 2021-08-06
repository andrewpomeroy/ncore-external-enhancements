import angular from "angular";
import template from "./welcome-landing.html";

export default {
  bindings: {},
  template: template,
  require: {
    "welcomeContext": "^",
  }
};
