import express from "express";
import cors from 'cors'
import authRouter from "./routers/auth"
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import morgan from "morgan";
import productRouter from "./routers/product"
import categoryRouter from "./routers/category";
import cartRouter from "./routers/cart"
import orderRouter from "./routers/order"
const app = express();
dotenv.config()
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"))
// connect db
connectDB(process.env.DB_URI)
// router
app.use("/api/v1", authRouter)
app.use("/api/v1", productRouter)
app.use("/api/v1", categoryRouter)
app.use("/api/v1", cartRouter)
app.use("/api/v1", orderRouter)
export const viteNodeApp = app;