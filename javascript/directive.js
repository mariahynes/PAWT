angular.module('pawtDirectives',[]);

angular.module('pawtDirectives').directive('pawtNav', function() {
  return {
    restrict: 'E',    // usage of the directive: E -> element
    templateUrl: 'templates/directives/pawt-nav.html'
  };
});

angular.module('pawtDirectives').directive('makeMap', function() {
 
            var directive = {
                  restrict: 'EA',                        
                  templateUrl: 'templates/directives/map.html',
                  scope: {
                        map: '=map'
                  },
                  link: function(scope, element, attrs){
                        console.log("in map directive link");
                  },
                  controller: function mapController($scope) {
 
                              $scope.zoomIn = function(){
                                    $scope.map.zoom++;
                              };
                              $scope.zoomOut = function(){
                                    $scope.map.zoom--;
                              };
                              $scope.mapDimensions = function() {
                                    if (!$scope.map.width)
                                         var width = 300;
                                    else
                                         width = $scope.map.width;
                                    if (!$scope.map.height)
                                         var height = 300; 
                                    else
                                         height = $scope.map.height;
                                    return width + 'x' + height;
                              }                
                        }                                        
                  };
            return directive;        
});

angular.module('pawtDirectives').directive('forecastWeatherPanel', function() {
  return {
    restrict: 'E',    // E -> element
    scope: {
      forecastList: '=info2'    // 'movie' set with 'info' attribute
    },
    templateUrl: 'templates/directives/forecastWeatherPanel.html',
    controller: function WeatherController($scope,WeatherService,myWeatherConfig){
        
              var url_forecast = myWeatherConfig.forecastWeatherURL + myWeatherConfig.weatherAPI;
              $scope.forecastList = [];
              $scope.loading_forecast = true;
             
              WeatherService.getWeather(url_forecast).then(
                function(result_forecast){
                  $scope.forecastList = result_forecast;
                  $scope.loading_forecast = false;
                  console.log("ForecastList " + $scope.forecastList);
                } 
                ).catch(
                  function(error_forecast) {
                    console.log("error forecast", error_forecast);
                    console.log("ForecastList error " + $scope.forecastList);
                  }
                );
                }
  };
});

angular.module('pawtDirectives').directive('weatherPanel', function() {
  return {
    restrict: 'E',    // E -> element
    scope: {
      weatherList: '=info'    // 'movie' set with 'info' attribute
    },
    templateUrl: 'templates/directives/weatherPanel.html',
    controller: function WeatherController($scope,WeatherService,myWeatherConfig){
        var url = myWeatherConfig.currentWeatherURL + myWeatherConfig.weatherAPI;
        $scope.weatherList = [];
        $scope.loading = true;
        
        WeatherService.getWeather(url).then(
          function(result){
            $scope.weatherList = result;
            $scope.loading = false;
            console.log("WeatherList " + result);
          } 
          ).catch(
            function(error) {
              console.log("error", error);
              console.log("WeatherList error " + $scope.weatherList);
            }
          )
        }
  
  };
});