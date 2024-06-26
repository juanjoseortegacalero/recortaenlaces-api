const mongoose = require('mongoose')
const shortId = require('shortid')
const {Schema} = mongoose

const urlSchema = new Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})


const UrlModel = mongoose.model('ShortUrl', urlSchema)

module.exports = UrlModel;
