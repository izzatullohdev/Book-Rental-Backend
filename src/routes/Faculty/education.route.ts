import express from "express";
import {
  createEducation,
  deleteEducation,
  getAllEducations,
  getOneEducation,
  updateEducation,
} from "../../controllers/Faculty/education.controller";

import { validateRequest } from "../../middlewares/validateRequest";
import {
  createEducationSchema,
  updateEducationSchema,
} from "../../validations/Faculty/education.validation";

const router = express.Router();

router
  .route("/")
  .get(getAllEducations)
  .post(validateRequest(createEducationSchema), createEducation);

router
  .route("/:id")
  .get(getOneEducation)
  .put(validateRequest(updateEducationSchema), updateEducation)
  .delete(deleteEducation);

export default router;
