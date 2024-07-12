import { Router } from "express";
import homeRoutes from './homeRoute.js';
import authRoutes from './authRoute.js';
import materialsRoutes from './materialsRoute.js';
import furnituresRoutes from './furnituresRoute.js';
import companiesRoutes from './companiesRoute.js';
import adminRoutes from './adminRoute.js';

const router = Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);
router.use('/materiaux', materialsRoutes);
router.use('/meubles', furnituresRoutes);
router.use('/fournisseurs', companiesRoutes)
router.use('/admin', adminRoutes );

export default router;