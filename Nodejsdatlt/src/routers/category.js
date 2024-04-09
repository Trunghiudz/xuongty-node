import { Router } from "express"
import { create, deleteCategoryById, getAll, getCategoryById, updateCategoryById } from "../controllers/category";
const router = Router();
router.get('/categorys', getAll)
router.get('/categorys/:id', getCategoryById)
router.delete('/categorys/:id', deleteCategoryById)
router.put('/categorys/:id', updateCategoryById)
router.post('/categorys', create)
export default router;