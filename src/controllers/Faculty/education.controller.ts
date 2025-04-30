import { asyncHandler } from "../../middlewares/asyncHandler";
import { EducationType } from "../../models/Faculty/Education";
import { responseHandler } from "../../utils/responseHandler";
import { Request, Response } from "express";
// @desc Get All Educations
// @route GET /api/v1/faculty/education
// @access private
export const getAllEducations = asyncHandler(
  async (_req: Request, res: Response) => {
    const educations = await EducationType.find();
    responseHandler(res, 200, "Educations fetched successfully", educations);
  }
);

// @desc Get One Education
// @route GET /api/v1/faculty/education/:id
// @access private
export const getOneEducation = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const education = await EducationType.findById(id);
    responseHandler(res, 200, "Education fetched successfully", education);
  }
);

// @desc Create Education
// @route POST /api/v1/faculty/education
// @access private
export const createEducation = asyncHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;
    const education = await EducationType.create({ title });
    responseHandler(res, 200, "Education created successfully", education);
  }
);

// @desc Update Education
// @route PUT /api/v1/faculty/education/:id
// @access private
export const updateEducation = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    const education = await EducationType.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    responseHandler(res, 200, "Education updated successfully", education);
  }
);

// @desc Delete Education
// @route DELETE /api/v1/faculty/education/:id
// @access private
export const deleteEducation = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const education = await EducationType.findByIdAndDelete(id);
    responseHandler(res, 200, "Education deleted successfully", education);
  }
);
