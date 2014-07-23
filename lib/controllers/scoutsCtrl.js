var Scout = require('../models/scout')

function scoutsCtrl(){
    var list = function (req,res){
        var searchParams = {};
        Scout.find(searchParams, function(err, scouts){
            if(err){
                console.log(err);
                res.send(500, "bad things happened");
            }

            res.json(scouts);
        })

    };
    var save = function (req,res){
        var scout = req.body;
        var scoutId = scout._id;
        console.log(scoutId);

        delete scout._id;
        console.log(scout);

        Scout.update({_id: scoutId}, scout, function(err){
            if(err){
                console.log(err);

                res.send(500, "bad things happened");
            }
            //res(200);

        })

    };
    var getById = function (req,res){

        Scout.findById(req.params.id ,function(err, scouts){
            if(err){
                console.log(err);
                res.send(500, "bad things happened");
            }

            res.json(scouts);
        })
    };

    return{
        List: list,
        Save: save,
        getById: getById
    };
}

module.exports = scoutsCtrl();