import express from "express";
import AdminRouter from "./admin.route";
import FacultyRouter from "./Faculty";
import { protect } from "../middlewares/protect";
const router = express.Router();

// Barcha route'larni bir joyga yig'amiz
router.use("/admin", AdminRouter);
router.use("/faculty", protect, FacultyRouter);

// !! Default export qilish shart
export default router;
