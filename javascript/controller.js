angular.module("routingControllers", []);

angular.module("routingControllers").controller("AboutController", function($scope){

	var self = this;
	self.message = "The app route is working";

});

angular.module("routingControllers").controller("HomeController", function($scope){


});

angular.module("routingControllers").controller("ToursController", function($scope, $routeParams,myMapConfig){

	var self = this;
	self.message = "This is the Home Page";
	
	if ($routeParams.ocob === "ocob"){

		$scope.ocob_true = true;

	}
	else{

		$scope.ocob_true = false;
		
	};
	$scope.maps = [{
					address: "53.339858, -6.260632",
					zoom: 17,
					width: 300,
					mapType:"hybrid",
					key: myMapConfig.mapAPI
					},{
					address: "53.340082, -6.251452",
					zoom: 17,
					width: 300,
					mapType:"hybrid",
					key: myMapConfig.mapAPI
					}];


	$scope.setMap = function(the_value){

		$scope.map = $scope.maps[the_value];
	};


		

});

angular.module("routingControllers").controller("ContactController", function($scope,$http){

	$scope.user = {};
	$scope.submitted = false;
	$scope.submitMessage = "";
	$scope.errorEmail= "";
	$scope.emailsMatch = false;
	
	$scope.formReload = function(){
		$scope.submitted = false;
		$scope.user.message = "";
		$scope.submitMessage = "";
		$scope.errorEmail = "";
	};
	
	$scope.clearForm = function(){
		$scope.submitted = false;
		$scope.errorEmail = "";
		$scope.submitMessage = "";
		$scope.user = {};
	};

	$scope.feedbackForm = function(feedbackForm){
	
		if(feedbackForm.$valid){
		
			if($scope.user.email === $scope.user.email2){

				$scope.errorEmail = "";
				$scope.emailsMatch = true;
				
				$http({
					  method  : 'POST',
					  url     : 'mailer.php',
					  data    : $.param($scope.user),  // pass in data as strings
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data 
				})
				.then(function mySuccess(response){

				      $scope.submitMessage = "Thank you for your message, " + $scope.user.firstname;
				      $scope.submitted = true;

				 }, function myError(response){
				      
				      $scope.submitMessage = "Sorry, "+ $scope.user.firstname + ", your message did not send";
				      $scope.submitted = true;
				    
				});

			}
			else{
				$scope.errorEmail = "Sorry, your email addresses do not match.";
				$scope.submitted = false;
				$scope.emailsMatch = false;
			}
		
		}
		else{
			$scope.submitted = true;
			$scope.errorEmail = "";
			$scope.submitMessage = "Sorry, your message is not valid.";
		}
	};
	

});

angular.module("routingControllers").controller("SculptureController", function($scope){



});

angular.module("routingControllers").controller("ReadingController", function($scope){



});

angular.module("routingControllers").controller("ArtLinksController", function($scope){



});