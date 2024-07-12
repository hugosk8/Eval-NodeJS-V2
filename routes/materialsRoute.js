import { Router } from "express";
import { addMaterial, renderAddMaterialPage, renderMaterialPage, renderMaterialsPage } from "../controllers/materialsController.js";

const router = Router();

router.get('/', renderMaterialsPage);
router.get('/ajouter', renderAddMaterialPage);
router.post('/ajouter', addMaterial);
router.get('/:name', renderMaterialPage)

export default router;