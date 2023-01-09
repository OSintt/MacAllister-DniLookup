import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    username: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    mod: {
        type: Boolean,
        default: false
    },
    saved_dnis: [{
        ref: 'Dni',
        type: Schema.Types.ObjectId
    }],
    banned: {
        type: Boolean,
        default: false
    }
});

UserSchema.statics.encryptPassword = async (pwd) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(pwd, salt);
}

UserSchema.statics.comparePwd = async (pwd, receivedPwd) => {
	return await bcrypt.compare(pwd, receivedPwd);
}

export default model('User', UserSchema);