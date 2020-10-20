import {Router} from 'express'
const router = Router();

// crud productos 
router.post("/api/v1/products", ProductsController.register);
router.get("/api/v1/Products", ProductsController.listall);
router.get("/api/v1/productos/:ProductsId", ProductsController.find);
router.put("/api/v1/productos/:ProductsId", ProductsController.update);
router.delete("/api/v1/productos/:ProductsId", ProductsController.delete);