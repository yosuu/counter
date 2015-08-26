angular.module('counterApp.controllers', [])

.controller('HomeCtrl', function($scope, $ionicPopup) {
  $scope.counter = 0;
	$scope.data = {};
	
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
		var myPopup = $ionicPopup.show({
			template: '<input type="text" ng-model="data.name">',
			title: 'Enter name for this result',
			scope: $scope,
			buttons: [
				{ text: 'Cancel' },
				{
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.name) {
							e.preventDefault();
						} else {
							return $scope.data.name;
						}
					}
				}
			]
		});
		myPopup.then(function(res) {
				myPopup.close();
		});
	};
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
