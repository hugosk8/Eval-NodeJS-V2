import { Router } from "express";
import requireAuth from "../middleware/auth.js";
import { addFurniture, renderAddFurniturePage } from "../controllers/furnituresController.js";

const router = Router();

router.get('/ajouter', requireAuth, renderAddFurniturePage);
router.post('/ajouter', addFurniture);

export default router;