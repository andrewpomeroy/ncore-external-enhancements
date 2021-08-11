import angular from "angular";

// export default function getMockData(payload, timeout = 750) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(payload);
//     }, timeout);
//   });
//   return promise;
// }

mockRestService.$inject = ["$timeout", "$q"];
function mockRestService($timeout, $q) {
  return {
    getWithDelay: function getMockData(payload, timeout = 750) {
      var deferred = $q.defer();
      $timeout(() => {
        deferred.resolve(payload);
      }, timeout);
      return deferred.promise;
    },
  };
}

export default mockRestService;
