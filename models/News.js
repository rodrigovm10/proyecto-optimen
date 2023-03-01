const mongoose = require('mongoose');

const newsSchema = new moongose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	roles: [
		{
			type: String,
			default: 'ContentCreator',
		},
	],
	active: [
		{
			type: Boolean,
			default: true,
		},
	],
});

module.exports = mongoose.model('User', newsSchema);
