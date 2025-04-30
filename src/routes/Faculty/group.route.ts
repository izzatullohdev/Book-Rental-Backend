import express from "express";
import {
  createGroup,
  getAllGroups,
  getOneGroup,
  deleteGroup,
  updateGroup,
} from "../../controllers/Faculty/group.controller";

import { validateRequest } from "../../middlewares/validateRequest";
import {
  createFacultySchema,
  updateGroupSchema,
} from "../../validations/Faculty/group.validation";

const router = express.Router();

router
  .route("/")
  .post(validateRequest(createFacultySchema), createGroup)
  .get(getAllGroups);

router
  .route("/:id")
  .get(getOneGroup)
  .put(validateRequest(updateGroupSchema), updateGroup)
  .delete(deleteGroup);

export default router;
