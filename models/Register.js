const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
	moveType: {
		type: String,
		required: true,
	},
	dateType: {
		type: Date,
		required: true,
	},
	user: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Register', registerSchema);
