import { Router } from "express";
import homeRoutes from './homeRoute.js';
import authRoutes from './authRoute.js';
import materialsRoutes from './materialsRoutes.js';

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/materiaux', materialsRoutes);

export default router;