import Joi from "joi";
import User from "../models/user.js"
import { StatusCodes } from "http-status-codes"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
const signupSchema = Joi.object({
    name: Joi.string().required().min(3).max(30).messages({
        "any.required": "Trường Name là bắt buộc",
        "string.emty": "Trường Name không được để trống",
        "string.min": "Trường Name phải có ít nhất {#limit} kí tự",
        "string.max": "Trường Name không được vượt quá {#limit} kí tự",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Trường Email là bắt buộc",
        "string.emty": "Trường Email không được để trống",
        "string.email": "Trường Email phải hợp lệ",
    }),
    password: Joi.string().required().min(6).max(30).messages({
        "any.required": "Trường Password là bắt buộc",
        "string.emty": "Trường Password không được để trống",
        "string.min": "Trường Password phải có ít nhất {#limit} kí tự",
        "string.max": "Trường Password không được vượt quá {#limit} kí tự",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
        "any.required": "Trường Confirm Password là bắt buộc",
        "string.only": "Mật khẩu không trùng khớp",
    }),
    avatar: Joi.string().uri().messages({
        "string.uri": "Trường Avatar phải là đường dẫn hợp lệ",
    }),
})

export const signup = async (req, res) => {
    const { email, password, name, avatar } = req.body;
    const { error } = signupSchema.validate(req.body, { abortEarly: false })
    if (error) {
        const message = error.details.map(item => item.message)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message, });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(StatusCodes.CONFLICT).json({
            message: ["Email đã tồn tại"],
        })
    }
    const hashedPassword = await bcryptjs.hash(password, 12);
    const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

    const user = await User.create({
        ...req.body,
        password: hashedPassword,
        role,

    })
    return res.status(StatusCodes.CREATED).json({ user })
}
export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({
            messages: ["Email không tồn tại"],
        });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            messages: ["Mật khẩu không chính xác"],
        });
    }
    const token = jwt.sign({ userId: user._id }, "123456", {
        expiresIn: "7d",
    });
    return res.status(StatusCodes.OK).json({
        user,
        token,
    });
}
export const logout = async (req, res) => {

}