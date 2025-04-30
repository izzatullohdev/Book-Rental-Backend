import { Request, Response } from "express";
import { TredType } from "../../models/Faculty/TredType";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { responseHandler } from "../../utils/responseHandler";

// @desc Get All TredTypes
// @route GET /api/v1/faculty/tredtype
// @access private
export const getAllTredTypes = asyncHandler(
  async (_req: Request, res: Response) => {
    const tredTypes = await TredType.find();
    responseHandler(res, 200, "TredTypes fetched successfully", tredTypes);
  }
);

// @desc Get One TredType
// @route GET /api/v1/faculty/tredtype/:id
// @access private
export const getOneTredType = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const tredType = await TredType.findById(id);
    responseHandler(res, 200, "TredType fetched successfully", tredType);
  }
);

// @desc Create TredType
// @route POST /api/v1/faculty/tredtype
// @access private
export const createTredType = asyncHandler(
  async (req: Request, res: Response) => {
    const { title } = req.body;

    const tredType = await TredType.create({ title });
    responseHandler(res, 200, "TredType created successfully", tredType);
  }
);

// @desc Update TredType
// @route PUT /api/v1/faculty/tredtype/:id
// @access private
export const updateTredType = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    const tredType = await TredType.findByIdAndUpdate(
      id,
      { title },
      { new: true }
    );
    responseHandler(res, 200, "TredType updated successfully", tredType);
  }
);

// @desc Delete TredType
// @route DELETE /api/v1/faculty/tredtype/:id
// @access private
export const deleteTredType = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const tredType = await TredType.findByIdAndDelete(id);
    responseHandler(res, 200, "TredType deleted successfully", tredType);
  }
);
