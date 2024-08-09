import { Router } from "express";
import { createOrder, getOrdersByUser } from "../controllers/orderController";

const router = Router();

router.post("/orders", createOrder);
router.get("/orders/user/:user", getOrdersByUser);

export default router;
