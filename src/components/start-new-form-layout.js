import angular from "angular";
import template from "./start-new-form-layout.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: controller,
};

function controller() {
  var $ctrl = this;

  this.$postLink = function () {
    if (this.newFormWizardContext) {
      console.log(this.newFormWizardContext);
    }
  };
}
