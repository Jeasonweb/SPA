/***********************************************************************************
 ** 功能模塊描述:
 **=================================================================================
 ** 功能內容描述:
 ** 
 ** 聯繫方式：Jeason_zhang888@163.com      Tel:13641638693
 ** 修改時間：
 ** 加法函数，用来得到精确的加法结果
 ** 调用：
 ** 返回值：
 **=================================================================================
 ************************************************************************************/

var app = angular.module('myApp',[]);
	app.controller('myCtrl',function($scope){		
		$scope.firstName = 'Jeason';
		$scope.familyName = 'Zhang';		
		
	});
	app.controller('includeCtr',function($http,$scope){
		$http.get('view/welcome.html').then(function(response){
			
			$scope.myWelcome = response.data;			
			
		});		
	});
	app.controller('falshCtr',function($scope,$interval){
		$scope.myHeader = 'Hello Swallow';
		$interval(function(){
			$scope.myHeader = ($scope.myHeader == 'Hello Swallow')?'Hello Jeason':'Hello Swallow';
		},1000);
		
	});
	//$timeout
	app.controller('switchCtr',function($scope,$timeout){
		$scope.myLovers = ['Swallow','Lucy','Lily'];
		$timeout(function(){
			
			$scope.myLover = $scope.getRandomLover();			
		});	
		$scope.getRandomLover = function(){
			var tempCount = parseInt(Math.random()*$scope.myLovers.length);
			return $scope.myLovers[tempCount];
			
		}
	});
	//这是笔记本文本
	app.controller("myNoteCtrl", function($scope) {
	    $scope.message = "";
	    $scope.left  = function() {return 100 - $scope.message.length;};
	    $scope.clear = function() {$scope.message = "";};
	    $scope.save  = function() {alert("Note Saved");};
	});
	
	//*****************************************
	// 闪烁的标题栏
	//*****************************************
	 var count=false;
	function flashTitle(){
		document.title= (count?"==SPA==":"***SPA***");
		count=!count;
	}
	window.onload=function(){		
		setInterval(flashTitle,300);
	
	}

	
	
	
	
	

