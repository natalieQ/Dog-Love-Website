var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    profileID: { type: Number },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    personality: { type: String, required: true },
    likesToy: { type: Boolean, required: true },
    likesCat: { type: Boolean, required: true },
    owner: { type: String, required: true },
    imgPath: { type: String, required: true }
});

module.exports = mongoose.model('Dog', dogSchema);