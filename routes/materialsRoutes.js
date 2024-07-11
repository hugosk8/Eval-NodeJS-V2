import { Router } from "express";
import { renderMaterialPage, renderMaterialsPage } from "../controllers/materialsController.js";

const router = Router();

router.get('/', renderMaterialsPage);
router.get('/:name', renderMaterialPage)

export default router;