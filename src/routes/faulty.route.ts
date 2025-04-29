import { Router } from "express";
import {
  getAllFaculties,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from "../controllers/faculty.controller";
import { validateRequest } from "../middlewares/validateRequest";
import {
  updateFacultySchema,
  getFacultyByIdSchema,
  createFacultySchema,
} from "../validations/faculty.validation";
const router = Router();

router.post("/all-faculties", getAllFaculties);
router.post(
  "/create-faculty",
  validateRequest(createFacultySchema),
  createFaculty
);
router.post(
  "/update-faculty/:id",
  validateRequest(updateFacultySchema),
  updateFaculty
);
router.delete(
  "/delete-faculty/:id",
  validateRequest(getFacultyByIdSchema),
  deleteFaculty
);

export default router;
