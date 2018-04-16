var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var dogSchema = new Schema({
    profileID: { type: Number },
    name: { type: String },
    gender: { type: String, required: true },
    personality: { type: String, required: true },
    likesToy: { type: Boolean, required: true },
    likesCat: { type: Boolean, required: true },
    owner: { type: String },
    imgPath: { type: String }
});

module.exports = mongoose.model('Dog', dogSchema);