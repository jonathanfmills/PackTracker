app.controller('headerCtrl', ['$scope','$location', function($scope, $location){
    var self= this;

    self.headerItems = [{name: 'home', url: 'index'},
        {name: 'scouts', url: 'scouts'},
        {name: 'sessions', url: 'sessions'},
        {name: 'achievements', url: 'achievements'},
        {name: 'electives', url: 'electives'},
        {name: 'settings', url: 'settings'}
    ];

    $scope.isActive = function (viewLocation) {

        var page = $location.absUrl();
        var url = page.split('/');
        page = url[url.length-1]
        return viewLocation === page;
    };
}]);