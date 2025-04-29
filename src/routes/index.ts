import express from "express";
import AdminRouter from "./admin.route";

const router = express.Router();

// Barcha route'larni bir joyga yig'amiz
router.use("/admin", AdminRouter);

// !! Default export qilish shart
export default router;
