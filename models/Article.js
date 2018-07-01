var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  // Notes can be saved under an article
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Create Article model
var Article = mongoose.model("Article", ArticleSchema);

// Export
module.exports = Article;