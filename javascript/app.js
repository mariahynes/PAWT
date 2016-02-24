angular.module("pawtApp", ['ngRoute','routingControllers']);

//configure the routes

angular.module("pawtApp").config(function($routeProvider){
	
	//route for the home page template
	$routeProvider.when('/', {
		
			templateUrl: "templates/home.html",
			controller: "HomeController",
			controllerAs: "home"
		
	})

	//route for the about page
	$routeProvider.when("/about", {
		
			templateUrl: "templates/about.html",
			controller: "AboutController",
			controllerAs: "about"
		
	})
	
	//route for the contact page
	$routeProvider.when("/contact",{
	
		templateUrl: "templates/contact.html",
		controller: "ContactController",
		controllerAs: "contact"
	
	})
	
	//route for the tours and prices page
	$routeProvider.when("/tours",{
	
		templateUrl: "templates/tours.html",
		controller: "ToursController",
		controllerAs: "tours"
	
	})

	//route for the sculptors and scupltures page
	$routeProvider.when("/sculpture",{
	
		templateUrl: "templates/sculpture.html",
		controller: "SculptureController",
		controllerAs: "sculpture"
	
	})

	//route for the further reading page
	$routeProvider.when("/reading",{
	
		templateUrl: "templates/reading.html",
		controller: "ReadingController",
		controllerAs: "reading"
	
	})

	//route for the Art links page
	$routeProvider.when("/art",{
	
		templateUrl: "templates/art.html",
		controller: "ArtLinksController",
		controllerAs: "art"
	
	})

	//route for any path NOT above
	$routeProvider.otherwise({redirectTo: "/"});
	
});