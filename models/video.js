const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: { type: String, required: true },
    date:{ type: Date, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    channel: { type: String, required: true },
    series: { type: String, required: false },
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;