const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
	active: {
		type: Boolean,
		default: true,
	},
	permissions: [
		{
			type: String,
			default: 'Admin',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
