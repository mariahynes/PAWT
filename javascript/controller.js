angular.module("routingControllers", []);

angular.module("routingControllers").controller("AboutController", function($scope){

	var self = this;
	self.message = "The app route is working";

});

angular.module("routingControllers").controller("HomeController", function($scope){

	var self = this;
	self.message = "This is the Home Page";

});

angular.module("routingControllers").controller("ToursController", function($scope, $routeParams){

	var self = this;
	self.message = "This is the Home Page";
	
	if ($routeParams.ocob === "ocob"){

		$scope.ocob_true = true;

	}
	else{

		$scope.ocob_true = false;
		
	};



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