import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    // iphone 12 pro => slug => iphone-12-pro
    slug: {
        type: String,
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
    },
    gallery: {
        type: Array,
    },
    description: {
        type: String,
    },
    discount: {
        type: Number,
        default: 0,
    },
    countInStock: {
        type: Number,
        default: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: Array,
    },

}, { timestamps: true, versionKey: false })

export default mongoose.model('products', productSchema)