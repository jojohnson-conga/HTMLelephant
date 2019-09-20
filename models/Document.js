const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: Schema.Types.ObjectId,
    ref: 'tags'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Document = mongoose.model('document', DocumentSchema);