import { Router } from "express";
import requireAuth from "../middleware/auth.js";
import { renderAddCompanyPage, addCompany } from "../controllers/companiesController.js";

const router = Router();

router.get('/ajouter', requireAuth, renderAddCompanyPage)
router.post('/ajouter', addCompany);

export default router;