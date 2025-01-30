import { getParticipantsInfo } from "../controllers/infoControllers.js"
import express from "express"; 

const router = express.Router(); 

router.get("/info", getParticipantsInfo); 

export default router; 