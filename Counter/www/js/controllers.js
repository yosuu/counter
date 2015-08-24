angular.module('counterApp.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('HistoryCtrl', function($scope) {
})

.controller('FeedbackCtrl', function($scope, $ionicPopup, $timeout, $location) {
	$scope.feedbackData = {};
	
	$timeout(function() {
		$scope.postFeedback = function() {
			var alertPopup = $ionicPopup.alert({
				title: 'Thank You',
				template: 'Thank you for your feedback.'
			});
			alertPopup.then(function(res) {
				$location.path('/home').replace();
			});
		}
	}, 1000);
});
