import { Router } from "express";
import homeRoutes from './homeRoute.js';

const router = Router();

router.use('/', homeRoutes)

export default router