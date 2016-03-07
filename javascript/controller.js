angular.module("routingControllers", []);

angular.module("routingControllers").controller("AboutController", function($scope){

	var self = this;
	self.message = "The app route is working";

});

angular.module("routingControllers").controller("HomeController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

});

angular.module("routingControllers").controller("ToursController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

	var myCenter = new google.maps.LatLng(45.434046,12.340284);
	
	
	var mapProp = {
	  		center:myCenter,
	  		zoom:18,
	  		mapTypeId:google.maps.MapTypeId.HYBRID
  	};

	$scope.map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	
	



});

angular.module("routingControllers").controller("SculptureController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

});

angular.module("routingControllers").controller("ReadingController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

});

angular.module("routingControllers").controller("ArtLinksController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

});