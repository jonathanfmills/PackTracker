app.factory('scoutsSvc', [ '$resource', function($resource){

    return $resource('/api/scouts');
}]);

app.factory('awardsSvc', [ '$resource', function($resource){

    return $resource('/api/awards');
}]);