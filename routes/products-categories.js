import {Router} from 'express'
const router = Router();

// crud products-categories
router.post("/api/v1/Products-categories", product_categories.register);
router.get("/api/v1/Products-categories", product_categories.listall);
router.get("/api/v1/productos/:Products-categoriesId", product_categories.find);
router.put("/api/v1/productos/:Products-categoriesId", product_categories.update);
router.delete("/api/v1/productos/:Products-categoriesId", product_categories.delete);