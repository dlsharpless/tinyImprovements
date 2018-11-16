const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: "Title is required."
	},
	message: {
		type: String,
		trim: true,
		required: "Message is required."
	},
	from: {
		type: Schema.Types.ObjectId,
		ref: "Users"
	},
	to: {
		type: Schema.Types.ObjectId,
		ref: "Users"
	}
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;
