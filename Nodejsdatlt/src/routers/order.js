import { Router } from "express";
import { createOrder, getOrderById, getOrders } from "../controllers/order";
const router = Router();
router.post("/order", createOrder);
router.get("/order", getOrders);
router.post("/order/:userId/:orderId", getOrderById);
export default router;