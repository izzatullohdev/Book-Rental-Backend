import { Router } from "express";
import {
  deleteAdmin,
  logoutAdmin,
  loginAdmin,
  createAdmin,
  getAllAdmins,
  updateAdmin,
} from "../controllers/admin.controller";
import { validateRequest } from "../middlewares/validateRequest";
import { adminRegisterSchema } from "../validations/admin.validation";

const router = Router();

router.post("/register", validateRequest(adminRegisterSchema), createAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.delete("/:id", deleteAdmin);
router.post("/all-admins", getAllAdmins);
router.post("/update/:id", updateAdmin);

export default router;
