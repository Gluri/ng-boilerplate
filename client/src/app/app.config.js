(function () {
    'use strict';


    angular
        .module('app')
        .config(config);


    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$httpProvider'
    ];


    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $stateProvider.state('login', {
            url: '/login',
            views: {
                'access': {
                    controller: 'LoginCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: {
                pageTitle: 'Login',
                access: 'anon'
            }
        })


        $stateProvider.state('register', {
            url: '/register',
            views: {
                'access': {
                    controller: 'RegisterCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'register/register.tpl.html'
                }
            },
            data: {
                pageTitle: 'Register',
                access: 'anon'
            }
        })


        $stateProvider.state('home', {
            url: '/home',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'home/home.tpl.html',
            data: {
                pageTitle: 'Home',
                access: 'public'
            }
        })


        

        $urlRouterProvider.otherwise('/login');
        $urlRouterProvider.rule(trailingSlashFix);
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push(responseError);


        function responseError($q, $location) {
            return {
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }

        // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
        function trailingSlashFix($injector, $location) {
            if ($location.protocol() === 'file') {
                return;
            }

            var path = $location.path(),
            // Note: misnomer. This returns a query object, not a search string
                search = $location.search(),
                params;

            // check to see if the path already ends in '/'
            if (path[path.length - 1] === '/') {
                return;
            }

            // If there was no search string / query params, return with a `/`
            if (Object.keys(search).length === 0) {
                return path + '/';
            }

            // Otherwise build the search string and return a `/?` prefix
            params = [];
            angular.forEach(search, function (v, k) {
                params.push(k + '=' + v);
            });
            return path + '/?' + params.join('&');
        }

    }
})();
