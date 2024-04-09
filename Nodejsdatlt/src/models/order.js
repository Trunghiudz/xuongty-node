import { required } from "joi";
import mongoose from "mongoose";

// Hàm để sinh orderNumber
// const generateOrderNumber = () => {
//     const timestamp = Date.now().toString();
//     const random = Math.floor(Math.random() * 1000)
//         .toString()
//         .padStart(3, "0");
//     return `${timestamp}-${random}`;
// };

const orderItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    items: [orderItemSchema],
    // orderNumber: {
    //     type: String,
    //     auto: true,
    //     unique: true,
    // },
    customerInfo: {
        type: {
            name: {
                type: String,
                required: true,
            },
            phone: {
                type: Number
            },
            email: {
                type: String,
                required: true,
            },
            payment: {
                type: String,
            },
            city: {
                type: String
            }
        },
    },
    totalPrice: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
// Tạo pre-save hook để sinh orderNumber trước khi lưu vào cơ sở dữ liệu
// orderSchema.pre("save", function (next) {
//     if (!this.orderNumber) {
//         this.orderNumber = generateOrderNumber();
//     }
//     next();
// });
export default mongoose.model("Order", orderSchema);