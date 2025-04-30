import { Request, Response } from "express";
import { Faculty } from "../../models/Faculty/Faculty";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { responseHandler } from "../../utils/responseHandler";

// @desc Get All Faculties
// @route GET /api/v1/faculty
// @access private
export const getAllFaculties = asyncHandler(
  async (_req: Request, res: Response) => {
    const faculties = await Faculty.find();
    responseHandler(res, 200, "Faculties fetched successfully", faculties);
  }
);

// @desc Get One Faculty
// @route GET /api/v1/faculty/:id
// @access private
export const getOneFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const faculty = await Faculty.findById(id);
    responseHandler(res, 200, "Faculty fetched successfully", faculty);
  }
);

// @desc Create Faculty
// @route POST /api/v1/faculty
// @access private
export const createFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;
    const faculty = await Faculty.create({ title });
    responseHandler(res, 200, "Faculty created successfully", faculty);
  }
);

// @desc Update Faculty
// @route PUT /api/v1/faculty/:id
// @access private
export const updateFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    const faculty = await Faculty.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    responseHandler(res, 200, "Faculty updated successfully", faculty);
  }
);

// @desc Delete Faculty
// @route DELETE /api/v1/faculty/:id
// @access private
export const deleteFaculty = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const faculty = await Faculty.findByIdAndDelete(id);
    responseHandler(res, 200, "Faculty deleted successfully", faculty);
  }
);
