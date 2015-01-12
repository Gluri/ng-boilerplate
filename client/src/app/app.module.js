(function () {
    'use strict';

    angular
        .module('app', [
            'ionic',
            'ngCordova', 
            //Templates
            'templates-app',
            'templates-common',
            //Pages
            'authorization',
            'home',
            'register',
            'login',
            'contatti',
            'offerte',
            'commesse',
            'clienti',
            //Plugins
            'ui.grid','ui.grid.selection','ui.grid.resizeColumns',
            'toaster',
            'cfp.loadingBar'
        ]);

    angular
        .module('home', [
            'ui.router',
            'schemaForm',
            'authorization'
        ]);


    angular
        .module('login', [
            'ui.router',
            'toaster'
        ]);

    angular
        .module('register', [
            'ui.router',
            'authorization',
            'formFor',
            'toaster'
        ]);


    angular
        .module('user', [
            'ui.router',
            'ui.bootstrap',
            'authorization',
            'model.user'
        ]);

    angular
        .module('clienti', [
            'ui.router'
        ]);

    angular
        .module('commesse', [
            'ui.router'
        ]);

    angular
        .module('offerte', [
            'ui.router'
        ]);

    angular
        .module('contatti', [
            'ui.router'
        ]);

})();
