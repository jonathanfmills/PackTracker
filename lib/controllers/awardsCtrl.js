var Awards = require('../models/awards.js')

function awardsCtrl(){
    var list = function (req,res){
        var searchParams = {};
        Awards.find(searchParams, function(err, awards){
            if(err){
                console.log(err);
                res.send(500, "bad things happened");
            }

            res.json(awards);
        })

    };
    var save = function (req,res){
        console.log('Inside Save')
        var input = req.body;
        var award = new Awards(input);
        award.save(function (err) {
            if (err) // ...
                console.log('meow');
        });

        res.send(200);

    };
    return{
        List: list,
        Save: save
    };
}

module.exports = awardsCtrl();