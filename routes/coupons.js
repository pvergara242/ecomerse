import {Router} from 'express'
const router = Router();

// crud coupons
router.post("/api/v1/coupons", Coupons.register);
router.get("/api/v1/coupons", Coupons.listAll);
router.get("/api/v1/productos/:CouponsId", Coupons.getCoupon);
router.put("/api/v1/productos/:CouponsId", Coupons.update);
router.delete("/api/v1/productos/:CouponsId", Coupons.delete);