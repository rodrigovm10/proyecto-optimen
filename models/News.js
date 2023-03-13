const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		data: Buffer,
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('User', newsSchema);
