import { asyncHandler } from "../../middlewares/asyncHandler";
import { Request, Response } from "express";
import { Group } from "../../models/Faculty/Group";
import { responseHandler } from "../../utils/responseHandler";
// @dec Create Group
// @route POST /api/v1/faculty/group
// @access private
export const createGroup = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;

  const group = await Group.create({ title });
  responseHandler(res, 200, "Group created successfully", group);
});

// @dec Get All Groups
// @route GET /api/v1/faculty/group
// @access private
export const getAllGroups = asyncHandler(
  async (_req: Request, res: Response) => {
    const groups = await Group.find();
    responseHandler(res, 200, "Groups fetched successfully", groups);
  }
);

// @dec Get One Group
// @route GET /api/v1/faculty/group/:id
// @access private
export const getOneGroup = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const group = await Group.findById(id);
  responseHandler(res, 200, "Group fetched successfully", group);
});

// @dec Delete Group
// @route DELETE /api/v1/faculty/group/:id
// @access private
export const deleteGroup = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const group = await Group.findByIdAndDelete(id);
  responseHandler(res, 200, "Group deleted successfully", group);
});

// @dec Update Group
// @route PUT /api/v1/faculty/group/:id
// @access private
export const updateGroup = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  const group = await Group.findByIdAndUpdate(id, { title }, { new: true });
  responseHandler(res, 200, "Group updated successfully", group);
});
