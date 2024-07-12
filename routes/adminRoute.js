import { Router } from "express";
import requireAuth from '../middleware/auth.js';
import { renderStatisticsPage } from "../controllers/adminController.js";

const router = Router();

router.get('/statistiques', requireAuth, renderStatisticsPage)

export default router;