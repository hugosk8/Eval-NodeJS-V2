import { Router } from "express";
import homeRoutes from './homeRoute.js';
import authRoutes from './authRoute.js';
import materialsRoutes from './materialsRoute.js';
import furnituresRoutes from './furnituresRoute.js'

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/materiaux', materialsRoutes);
router.use('/meubles', furnituresRoutes);

export default router;