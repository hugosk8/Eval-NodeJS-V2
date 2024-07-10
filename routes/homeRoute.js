import { Router } from "express";
import { renderAdminHome, renderGuestHome } from "../controllers/homeController.js";

const router = Router();

router.get('/', renderGuestHome);
router.get('/admin', renderAdminHome);

export default router;