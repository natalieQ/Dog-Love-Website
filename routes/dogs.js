const Dog = require('../models/dog');
const config = require('../config/database');

module.exports = ( router ) => {

    router.post('/newMatch', (req,res) => {
        if(!req.body.gender) {
            res.json({ success: false, message: 'Gender is required' });
        } else {
            if(!req.body.personality){
                res.json({ success: false, message: 'Personality is required' });
            } else {
                if(!req.body.likesToy){
                    res.json({ success: false, message: 'LikesToy is required' });
                } else {
                    if(!req.body.likesCat){
                        res.json({ success: false, message: 'LikesCat is required' });
                    } else {
                        Dog.find({
                            gender: req.body.gender,
                            personality: req.body.personality,
                            likesToy: req.body.likesToy,
                            likesCat: req.body.likesCat
                        }, (err, matches) => {
                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                                if(!matches || matches.length == 0) {  //no matches found
                                    res.json({ success: false, message: 'No matche found' });
                                } else {
                                    res.json({ success: true, matches: matches });
                                }
                            }
                        });
                    }
                }
            }
        }

    });
    
    return router;
};