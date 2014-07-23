var scouts = require('../controllers/scoutsCtrl');
var awards = require('../controllers/awardsCtrl');


module.exports = function(router){
    router.route('/scouts')
        .get(scouts.List)
        .post(scouts.Save);

    router.route('/Awards')
        .get(awards.List)
        .post(awards.Save);

    router.route('/scouts/:id')
        .get(scouts.getById);
};