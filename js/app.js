var app = angular.module('APP',[''])
app.controller('CtrlApp',function($scope,$location,$anchorScroll){

	$scope.gotoTop = function(){
		$location.has('top');
		$anchorScroll();
	}

	$scope.gotoBottom = function(){
		$location.has('bottom');
		$anchorScroll();
	}

	$scope.gotoAnchor = function(anchor_id){
		$location.has(anchor_id);
		$anchorScroll();
	}
})