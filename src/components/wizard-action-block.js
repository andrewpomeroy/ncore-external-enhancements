import angular from "angular";
import template from "./wizard-action-block.html";

export default {
  bindings: {
    size: "@",
    noMaxHeight: "<",
    heading: "@",
    subheading: "@",
    items: "<",
    onClick: "&",
  },
  template: template,
  transclude: {
    heading: "?heading",
    subheading: "?subheading",
  },
  controller: WizardActionBlockController,
};

WizardActionBlockController.$inject = ["$element", "$attrs"];
function WizardActionBlockController($element, $attrs) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    if (!$attrs.size) {
      $ctrl.size = "medium";
    }
    $element.find("div")[0].classList.add("WelcomeScreenActionBlock--" + $ctrl.size);
    // Add UL/LI semantics for accessibility
  };

  $ctrl.$postLink = function () {
    if ($element[0].parentNode.tagName === "UL" || $element[0].parentNode.getAttribute("role") === "list") {
      $element[0].setAttribute("role", "listitem");
    }
  };
}
