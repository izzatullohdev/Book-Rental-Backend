import express from "express";
import facultyRoutes from "./faulty.route";
import groupRoutes from "./group.route";
import educationRoutes from "./education.route";
import tredTypeRoutes from "./tredtype.route";

const router = express.Router();

// Avval child route'lar
router.use("/group", groupRoutes);
router.use("/education", educationRoutes);
router.use("/tredtype", tredTypeRoutes);

// So‘ngida umumiy faculty routes
router.use("/", facultyRoutes); // bu /:id ni ichida oladi

export default router;
