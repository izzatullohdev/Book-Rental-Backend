import express from "express";
import {
  createTredType,
  deleteTredType,
  getAllTredTypes,
  getOneTredType,
  updateTredType,
} from "../../controllers/Faculty/tredtype.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createTredTypeSchema,
  updateTredTypeSchema,
} from "../../validations/Faculty/tredtype.validation";

const router = express.Router();

router
  .route("/")
  .get(getAllTredTypes)
  .post(validateRequest(createTredTypeSchema), createTredType);

router
  .route("/:id")
  .get(getOneTredType)
  .put(validateRequest(updateTredTypeSchema), updateTredType)
  .delete(deleteTredType);

export default router;
