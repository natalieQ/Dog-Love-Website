const Dog = require('../models/dog');
const config = require('../config/database');

module.exports = ( router ) => {

    router.post('/newMatch', (req,res) => {
        if(!req.body.gender) {
            res.json({ success: false, message: 'Gender is required' });
        }

    });
    
    return router;
};