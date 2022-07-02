import { Router } from "express";
import ProfileController from "../controllers/Profile.controller";
const router = Router();
router.get("/", ProfileController.allUsers);

export default router;
