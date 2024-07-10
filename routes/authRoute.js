import { Router } from "express";
import { renderLoginPage, renderRegisterPage } from "../controllers/authController.js";

const router = Router();

router.get('/login', renderLoginPage);
router.get('/register', renderRegisterPage);

export default router;