app.controller('scoutsCtrl', ['$scope', 'scoutsSvc', function($scope,scoutsSvc){
    var self= this;

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
       // console.log("Entering hasAward");
       // console.log(scout)
        if(!scout.awards[0]){
            return false
        }

        for(i=0; i< scout.awards.length; i++)
        {
            if( scout.awards[i].name == award.name ){
                return true;
            }
        }

        //console.log(award)
       // console.log("Leaving hasAward");
        return false
    }

    self.selectAward = function(award){
        console.log("Entering selectAward");
        console.log(award)


        if(!self.editingScout.awards) {
            self.editingScout.awards = [{}]
        }

        self.editingScout.awards.push(award);

        console.log(self.editingScout)
        console.log("Leaving selectAward");
        return false
    }

    self.editScout = function(scout){
        console.log("Editing Scout");
        //console.log(scout);
        self.editingScout = scout;
        self.editing = true;
    }

    self.saveScout = function(){
        console.log("Saving Scout");
        //console.log(self.editingScout);
        scoutsSvc.save(self.editingScout);
        self.editing = false;
    }
}]);