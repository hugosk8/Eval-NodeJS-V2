import { Router } from "express";
import { renderAddCompanyPage, addCompany } from "../controllers/companiesController.js";

const router = Router();

router.get('/ajouter', renderAddCompanyPage)
router.post('/ajouter', addCompany);

export default router;