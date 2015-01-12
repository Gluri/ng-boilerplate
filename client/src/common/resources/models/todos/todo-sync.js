(function() {
    'use strict';

    angular
        .module('todos')
        .factory('TodoSync', TodoFactory);

    TodoFactory.$inject = [
        'Sync',
        'yngutils'
    ];

    function TodoFactory(Sync, yngutils) {

        return new Sync("gennaro", 'https://ilbimbocresce.couchappy.com', filter, yngutils.ASC);

        function filter(doc) {
            if(doc._deleted === true) {
                return true
            }

            return doc.type === "post";
        }
    }
})();