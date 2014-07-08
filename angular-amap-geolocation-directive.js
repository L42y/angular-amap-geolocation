angular.module('l42y.amap.geolocation').directive('amapGeolocation', function (
  $window
) {
  return {
    require: 'amapMap',
    restrict: 'A',
    link: function ($scope, $element, $attrs, amap) {
      amap.map.plugin(['AMap.Geolocation'], function () {
        var geolocation = new $window.AMap.Geolocation();
        amap.map.addControl(geolocation);
        geolocation.getCurrentPosition();
      });
    }
  };
});
