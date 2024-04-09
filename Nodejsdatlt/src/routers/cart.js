import { Router } from "express";
import { addItemToCart, decreaseProductQuantity, getCartByUserId, increaseProductQuantity, removeFromCart, updateProductQuantity } from "../controllers/cart";
const router = Router();
router.get('/cart/:userId', getCartByUserId)
router.post('/cart/add-to-cart', addItemToCart)
router.post('/cart/remove', removeFromCart)
router.put('/cart/update-product-quantity', updateProductQuantity)
router.post("/cart/increase", increaseProductQuantity);
// Giảm số lượng của sản phẩm trong giỏ hàng
router.post("/cart/decrease", decreaseProductQuantity);
export default router