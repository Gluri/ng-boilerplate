(function() {
    'use strict';

	angular.module('home')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = [
        '$rootScope',
        '$scope',
        '$location',
        'Auth',
        'cfpLoadingBar',
        '$ionicSideMenuDelegate'
    ];

		function HomeCtrl ($rootScope, $scope, $location, Auth, cfpLoadingBar,$ionicSideMenuDelegate) {
			var vm = this;
			
			$scope.menu_crud={new:true,edit:false,save:false,delete:false};
			
			
			$scope.toggleLeft = function() {
            	$ionicSideMenuDelegate.toggleLeft();
			}

			$scope.toggleRight = function() {
            	$ionicSideMenuDelegate.toggleRight();
			}
			
			$rootScope.homeCtrl=$scope;
			$rootScope.PageChildCtrl=null;

			vm.logout = logout;
        	vm.clearError = clearError;
				
			$scope.barTitle='CRM';
	        //Catch request start end stop events for the loading bar
	        $rootScope.$on('req:start', cfpLoadingBar.start);
	        $rootScope.$on('req:end', cfpLoadingBar.complete);

	        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	            if (angular.isDefined(toState.data.pageTitle)) {
	                vm.pageTitle = toState.data.pageTitle + '';
	            }
	        });

	        function logout() {
	            Auth.logout(function () {
	                $location.path('/');
	            });
	        }
	        
	        function clearError() {
	            $rootScope.error = null;
	        }
	        
	        var stateList=['grid','model','edit'];
	        
	       $scope.setState=function(scope,state){
				if (state=='grid') {
					
					scope.edit=false;
					
			
			$scope.menu_crud.new=true;
			$scope.menu_crud.edit=false;
			$scope.menu_crud.save=false;
			$scope.menu_crud.delete=false;
				}
				if (state=='model'){
					scope.edit=true; // fa scattare lo show della form  
					scope.readonly=true; // se model , la form è in sola lettua 
					
					// setta le visualizzazioni 
					
					$scope.menu_crud.new=false;
					$scope.menu_crud.edit=true;
					$scope.menu_crud.save=false;
					$scope.menu_crud.delete=false;
				}
				
				if (state=='edit') {
					scope.readonly=false;
					scope.edit=true;
					
					$scope.menu_crud.new=false;
					$scope.menu_crud.edit=false;
					$scope.menu_crud.save=true;
					$scope.menu_crud.delete=true;
			
					
				}
			}
			
			// comandi pulsanti per il crud 
			
			$scope.crud=function (cmd){
				if('save'){
					$scope.setState($rootScope.pageChildCtrl,'grid');
				};
				if('new'){
					$scope.setState($rootScope.pageChildCtrl,'edit');
			
				};
				if('edit'){
					$scope.setState($rootScope.pageChildCtrl,'edit'); alert('edit');
				};
				if('delete'){
					alert('delete');
				}
			}
			
		}
})();
