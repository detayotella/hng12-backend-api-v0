import { configDotenv } from "dotenv";
import express from "express"; 
import cors from "cors"; 
import infoRoutes from "./routes/infoRoutes.js";

configDotenv(); 

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use(cors()); 

app.use("/api", infoRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`); 
})