import { Router } from "express";
import {
  deleteAdmin,
  logoutAdmin,
  loginAdmin,
  createAdmin,
  getAllAdmins,
  updateAdmin,
  getMyProfile,
} from "../controllers/admin.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { adminRegisterSchema } from "../validations/admin.validation";
import { protect } from "../middlewares/protect";

const router = Router();

router.post("/register", validateRequest(adminRegisterSchema), createAdmin);
router.post("/login", loginAdmin);
router.post("/logout", protect, logoutAdmin);
router.delete("/:id", protect, deleteAdmin);
router.post("/all-admins", protect, getAllAdmins);
router.put("/update/:id", protect, updateAdmin);
router.get("/me", protect, getMyProfile);

export default router;
