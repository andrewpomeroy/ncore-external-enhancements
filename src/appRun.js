import angular from "angular";
import MockController from "./mock-controller.js";

angular.module("app", ["ui.router", "ngAnimate", "ngAria", "ngMaterial"]).controller("MockController", MockController);

export default angular.module("app");
