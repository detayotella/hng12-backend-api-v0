import { getParticipantsInfo } from "../controllers/infoControllers.js"
import express from "express"; 

const router = express.Router(); 

router.get("/", getParticipantsInfo); 

export default router; 