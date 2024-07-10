import { Router } from "express";
import { loginUser, logoutUser, registerUser, renderLoginPage, renderRegisterPage } from "../controllers/authController.js";

const router = Router();

router.get('/login', renderLoginPage);
router.post('/login', loginUser);
router.get('/register', renderRegisterPage);
router.post('/register', registerUser);
router.get('/logout', logoutUser);

export default router;