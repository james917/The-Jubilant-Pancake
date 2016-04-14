
		// define angular module/app
		var formApp = angular.module('formApp', []);

		// create angular controller and pass in $scope and $http
		function formController($scope, $http) {

			// create a blank object to hold form info &  $scope will allow this to pass between controller and view
			$scope.formData = {};

			// process the form
			$scope.processForm = function() {
				$http({
			        method  : 'POST',
			        url     : 'data.php',
			        data    : $.param($scope.formData),  // pass in data as strings
			        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			    })
			        .success(function(data) {
			            console.log(data);

			            if (!data.success) {
			            	// if not successful, bind errors to error variables
			                $scope.errorFirstName = data.errors.firstname;
			                $scope.errorLastName = data.errors.lastname;
			            } else {
			            	// if successful, bind success message to message
			                $scope.message = data.message;
                            $scope.errorFirstName = '';
			                $scope.errorLastName = '';
			            }
			        });

			};

		}