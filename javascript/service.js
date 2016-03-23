angular.module("pawtServices", []);

//can use $routeParams 

angular.module("pawtServices").factory("WeatherService", function($http){
   
    return  {
            getWeather: getWeather
        };
 
    function getWeather(url){
        return $http.get(url);
        };   
 });




angular.module("pawtServices").factory("Service_2", function(){



});