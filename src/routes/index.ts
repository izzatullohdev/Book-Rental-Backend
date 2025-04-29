import express from "express";
import AdminRouter from "./admin.route";
import FacultyRouter from "./faulty.route";
const router = express.Router();

// Barcha route'larni bir joyga yig'amiz
router.use("/admin", AdminRouter);
router.use("/faculty", FacultyRouter);

// !! Default export qilish shart
export default router;
