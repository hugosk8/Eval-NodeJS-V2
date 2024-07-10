import { Router } from "express";
import { renderAdminHome, renderGuestHome } from "../controllers/homeController.js";
import requireAuth from '../middleware/auth.js'

const router = Router();

router.get('/', renderGuestHome);
router.get('/admin', requireAuth, renderAdminHome);

export default router;