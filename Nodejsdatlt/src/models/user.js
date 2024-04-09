
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }, avatar: {
        type: String,
        default: "../upload/pngtree-character-default-avatar-png-image_5407167.jpg"
    }
}, { timestamps: true, versionKey: false })
export default mongoose.model('users', userSchema)