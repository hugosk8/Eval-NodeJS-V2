import { Router } from "express";
import { addFurniture, renderAddFurniturePage } from "../controllers/furnituresController.js";

const router = Router();

router.get('/ajouter', renderAddFurniturePage);
router.post('/ajouter', addFurniture);

export default router;