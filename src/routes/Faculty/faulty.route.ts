import express from "express";
import {
  createFaculty,
  deleteFaculty,
  getAllFaculties,
  getOneFaculty,
  updateFaculty,
} from "../../controllers/Faculty/faculty.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createFacultySchema,
  updateFacultySchema,
} from "../../validations/Faculty/faculty.validation";

const router = express.Router();

router
  .route("/")
  .get(getAllFaculties)
  .post(validateRequest(createFacultySchema), createFaculty);

router
  .route("/:id")
  .get(getOneFaculty)
  .put(validateRequest(updateFacultySchema), updateFaculty)
  .delete(deleteFaculty);

export default router;
