app.controller('scoutsCtrl', ['$scope', 'scoutsSvc', function($scope,scoutsSvc){
    var self= this;

    self.scoutEdit = {};
    self.scouts = scoutsSvc.query();
    self.editingScout = {};
    self.personal = true;
    self.achievements = false;
    self.awards = false;


    self.swap = function(swapItem){
        self.personal = false;
        self.achievements = false;
        self.awards = false;

        if(swapItem == 1)
        {
            self.personal = true;
        }
        if(swapItem == 2)
        {
            self.achievements = true;
        }
        if(swapItem == 3)
        {
            self.awards = true;
        }
    }

    self.hasAward = function(scout, award){
        console.log(scout)
        console.log(award)

        return false
    }

    self.editScout = function(scout){
        console.log("Editing Scout");
        console.log(scout);
        //self.editingScout = scoutsSvc.get({},{'Id':1});
        self.editingScout = scout;
        self.editing = true;
        self.scoutEdit = scout;
    }

    self.saveScout = function(){
        console.log("Saving Scout");
        console.log(self.editingScout);
        scoutsSvc.save(self.editingScout);
        self.editing = false;
    }
}]);