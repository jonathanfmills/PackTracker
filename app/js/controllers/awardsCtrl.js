app.controller('awardsCtrl', ['$scope', 'awardsSvc', function($scope,awardsSvc) {
    var self = this;

    self.awards = awardsSvc.query();
}]);
