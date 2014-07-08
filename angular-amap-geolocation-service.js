angular.module('l42y.amap.geolocation').factory('AmapGeolocation', function (
  $q,
  $window
) {
  return function amapGeolocation (map) {
    var deferred = $q.defer();

    map.plugin('AMap.Geolocation', function () {
      var geolocation = new $window.AMap.Geolocation();

      if (!geolocation.isSupported()) {
        deferred.reject('geolocation is not supported by your browser');
      }

      $window.AMap.event.addListener(geolocation, 'complete', function (data) {
        deferred.resolve(data);
      });

      $window.AMap.event.addListener(geolocation, 'error', function (error) {
        deferred.reject(error);
      });

      geolocation.getCurrentPosition();
    });

    return deferred.promise;
  };
});
