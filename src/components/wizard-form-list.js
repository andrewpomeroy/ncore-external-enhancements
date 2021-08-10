import angular from "angular";
import template from "./wizard-form-list.html";

export default {
  bindings: {
    list: "<",
    onClickItem: "<",
  },
  template: template,
  controller: Controller,
  transclude: {
    heading: "?heading",
    noneFoundMsg: "?noneFoundMsg",
  },
};

Controller.$inject = ["$scope"];
function Controller($scope) {
  const $ctrl = this;

  Object.defineProperties($ctrl, {
    filteredItems: {
      get: function () {
        if (!$ctrl.filter || !$ctrl.filter.length) return $ctrl.list;
        return $ctrl.list.filter(function (form) {
          return [form.name, form.description].some(function (property) {
            return (
              property && typeof property === "string" && property.trim().toLowerCase().indexOf($ctrl.filter.trim().toLowerCase()) !== -1
            );
          });
        });
      },
    },
  });
}
