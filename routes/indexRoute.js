import { Router } from "express";
import homeRoutes from './homeRoute.js';
import authRoutes from './authRoute.js';

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);

export default router