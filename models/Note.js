var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create note schema
var NoteSchema = new Schema({
  body: String
});

// Create Note model
var Note = mongoose.model("Note", NoteSchema);

// Export
module.exports = Note;