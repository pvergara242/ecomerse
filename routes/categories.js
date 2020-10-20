
import {Router} from 'express'
const router = Router();

// crud categories
router.post("/api/v1/categories", categories.register);
router.get("/api/v1/categories",categories.listall);
router.get("/api/v1/productos/:categoriesId", categories.find);
router.put("/api/v1/productos/:categoriesId",categories.update);
router.delete("/api/v1/productos/:categoriesId", categories.delete);