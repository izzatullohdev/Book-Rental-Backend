import { asyncHandler } from "../middlewares/asyncHandler";
import { Faculty } from "../models/Faculty";
import { Request, Response } from "express";
import { CustomError } from "../utils/CustomError";
import { responseHandler } from "../utils/responseHandler";
// @desc Get all faculties
// @route GET /api/v1/faculties
// @access Public
export const getAllFaculties = asyncHandler(
  async (_req: Request, res: Response) => {
    const faculties = await Faculty.find();
    if (!faculties) {
      throw new CustomError("Faculties not found", 404);
    }
    responseHandler(res, 200, "Faculties fetched successfully", faculties);
  }
);
// @desc create faculty
// @route POST /api/v1/faculties
// @access Private
export const createFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;
    if (!title) {
      throw new CustomError("Please provide title", 400);
    }
    const faculty = await Faculty.create({ title });
    responseHandler(res, 201, "Faculty created successfully", faculty);
  }
);

// @desc update faculty
// @route PUT /api/v1/faculties/:id
// @access Private
export const updateFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) {
      throw new CustomError("Please provide title", 400);
    }
    const faculty = await Faculty.findById(id);
    if (!faculty) {
      throw new CustomError("Faculty not found", 404);
    }
    faculty.title = title;
    await faculty.save();
    responseHandler(res, 200, "Faculty updated successfully", faculty);
  }
);

// @desc delete faculty
// @route DELETE /api/v1/faculties/:id
// @access Private
export const deleteFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const faculty = await Faculty.findByIdAndDelete(id);
    if (!faculty) {
      throw new CustomError("Faculty not found", 404);
    }
    responseHandler(res, 200, "Faculty deleted successfully");
  }
);
