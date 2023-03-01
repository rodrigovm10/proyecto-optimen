const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const registerSchema = new moongose.Schema({
	moveType: {
		type: String,
		required: true,
	},
	dateType: {
		type: Date,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

registerSchema.plugin(AutoIncrement, {
	inc_field: 'ticket',
	id: 'ticketNums',
	start_seq: 500,
});

module.exports = mongoose.model('Register', registerSchema);
