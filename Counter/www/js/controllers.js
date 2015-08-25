angular.module('counterApp.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.counter = 0;
	
	$scope.plus = function() {
		$scope.counter = $scope.counter + 1;
	};
	$scope.minus = function() {
		if($scope.counter > 0)
			$scope.counter = $scope.counter - 1;
	};
	$scope.reset = function() {
		$scope.counter = 0;
	};
	$scope.save = function() {
		$scope.counter = 999;
	}
})

.controller('HistoryCtrl', function($scope) {

})

.controller('FeedbackCtrl', function($scope, $ionicPopup, $timeout, $ionicHistory, $state, $ionicLoading) {
	$scope.feedbackData = {};
	
	$scope.postFeedback = function() {
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			showBackdrop: true,
			maxWidth: 200,
			showDelay: 0
		});
		
		$timeout(function() {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Thank You',
				template: 'Thank you for your feedback.'
			})
			.then(function(res) {
				$scope.feedbackData = {};
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('app.home');
			})
		}, 1000);		
	};
});
