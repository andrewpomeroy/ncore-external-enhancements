import permitChangeForms from "../permitChangeForms";
import permitApplicationForms from "../permitApplicationForms";
import template from "./wizard-all-forms.html";

export default {
  bindings: {},
  template: template,
  require: {
    newFormWizardContext: "^",
  },
  controller: WizardAllFormsCtrl,
};

WizardAllFormsCtrl.$inject = ["$scope", "$state", "$stateParams", "mockRestService"];
function WizardAllFormsCtrl($scope, $state, $stateParams, mockRestService) {
  const $ctrl = this;

  $ctrl.formCollections = {};

  $ctrl.select = function (item, collection) {
    switch (collection) {
      case "appForms":
        alert("starting form:\n" + JSON.stringify(item, null, 2));
        break;
      case "changeForms":
        // console.log($ctrl.newFormWizardContext.selectedSite);
        break;
      default:
        break;
    }
  };

  Object.defineProperties($ctrl, {
    site: {
      get: function () {
        return (
          $stateParams.siteId &&
          $ctrl.sites &&
          $ctrl.sites.find(function (site) {
            return site.siteId === $stateParams.siteId;
          })
        );
      },
    },
    sites: {
      get: function () {
        return $ctrl.newFormWizardContext.sites;
      },
    },
  });

  $scope.$watch(
    // this function just tells the watcher what property to watch.
    // it' s necessary to use a function here because the watched value isn't on $scope
    function () {
      return $ctrl.searchInput;
    },
    function (newValue, oldValue) {
      if (newValue === oldValue) return;
      $ctrl.hasSearched = true;
      if (!oldValue || newValue !== oldValue.trim()) {
        $ctrl.runSearch(newValue);
      }
    }
  );

  // TODO: This function will likely be made irrelevant by a server-side filter
  // on each collection, which the search function will call. Here we're just
  // filtering the list items that are already made available to us on the
  // client.
  function filterSearchedItem(item, searchInput) {
    return [item.name, item.description].some(function (property) {
      return property && typeof property === "string" && property.trim().toLowerCase().indexOf(searchInput.trim().toLowerCase()) !== -1;
    });
  }

  // TODO: Ideally forms would get normalized upstream by the services that provide them, this is a kludge.
  function normalizeForm(form, type) {
    switch (type) {
      case "changeForms":
        return {
          id: form.formId,
          name: form.formName,
          description: form.formDescription,
        };

      default:
        return form;
    }
  }

  $ctrl.collections = [
    {
      name: "appForms",
      displayName: "Application Forms",
    },
    {
      name: "changeForms",
      displayName: "Permit Change Forms",
    },
  ];

  $ctrl.runSearch = function (input) {
    $ctrl.isSearching = true;
    var collectionKeys = $ctrl.collections.map(function (collection) {
      return collection.name;
    });
    Promise.all([mockRestService.getWithDelay(permitApplicationForms), mockRestService.getWithDelay(permitChangeForms)]).then((results) => {
      var normalizedFormCollections = results.map(function (collection, index) {
        return collection.map(function (form) {
          return normalizeForm(form, collectionKeys[index]);
        });
      });
      $ctrl.filteredCollections = collectionKeys.reduce(function (output, key, index) {
        var filteredCollection = normalizedFormCollections[index].filter(function (form) {
          return filterSearchedItem(form, input);
        });
        output[key] = {
          name: key,
          displayName: $ctrl.collections[index].displayName,
          items: filteredCollection,
        };
        return output;
      }, {});
      $ctrl.totalMatches = Object.keys($ctrl.filteredCollections)
        .map(function (key) {
          return $ctrl.filteredCollections[key].items;
        })
        .reduce(function (length, collection) {
          return length + collection.length;
        }, 0);
      $ctrl.isSearching = false;
      $scope.$apply();
    });
  };

  $ctrl.$onInit = function () {};
}
