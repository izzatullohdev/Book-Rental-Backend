import { Request, Response } from "express";
import { Admin } from "../models/Admin";
import { CustomError } from "../utils/CustomError";
import { asyncHandler } from "../middlewares/asyncHandler";
import { responseHandler } from "../utils/responseHandler";

// @rule : Admin
// @desc : Admin cretate
// @route : POST /api/v1/admin/register
// @access : Public
export const createAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { name, password, HeroAdmin, HeroPassword } = req.body;

  if (!name || !password) {
    throw new CustomError("Please provide name and password", 400);
  }

  if (
    HeroAdmin.toLowerCase() !== process.env.HERO_ADMIN?.toLowerCase() ||
    HeroPassword !== process.env.HERO_PASSWORD
  ) {
    throw new CustomError("Invalid HeroAdmin or HeroPassword", 401);
  }
  if (
    HeroAdmin !== process.env.HERO_ADMIN ||
    HeroPassword !== process.env.HERO_PASSWORD
  ) {
    throw new CustomError("Invalid HeroAdmin or HeroPassword", 401);
  }

  const admin = await Admin.create({ name, password });

  responseHandler(res, 201, "Admin created successfully", admin);
});

// @rule : Admin
// @desc : Admin login
// @route : POST /api/v1/admin/login
// @access : Public
export const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new CustomError("Please provide name and password", 400);
  }
  //   checked adminrules
  const admin = await Admin.findOne({ name }).select("+password");
  if (!admin) {
    throw new CustomError("Invalid credentials", 401);
  }
  // Rule tekshirish
  if (admin.role !== "admin") {
    throw new CustomError("You are not authorized as admin", 403);
  }
  // 2. Passwordni tekshiramiz
  const isMatch = await admin.comparePassword(password);

  if (!isMatch) {
    throw new CustomError("Invalid credentials", 401);
  }

  // Success login: JWT yaratamiz (hozircha JWT create function yozmayapman, agar hohlasang keyin qo'shamiz)
  responseHandler(res, 200, "Login successful", {
    name: admin.name,
    role: admin.role,
  });
});

// @rule : Admin
// @desc : Admin logout
// @route : POST /api/v1/admin/logout
// @access : Private
export const logoutAdmin = asyncHandler(
  async (_req: Request, res: Response) => {
    responseHandler(res, 200, "Logout successful");
  }
);

// @rule : Admin
// @desc : Admin delete
// @route : POST /api/v1/admin/delete:id
// @access : Private
export const deleteAdmin = asyncHandler(
  async (_req: Request, res: Response) => {
    const { id } = _req.params;
    const { HeroAdmin, HeroPassword } = _req.body;

    if (!HeroAdmin || !HeroPassword) {
      throw new CustomError("Please provide HeroAdmin and HeroPassword", 400);
    }
    if (
      HeroAdmin !== process.env.HERO_ADMIN ||
      HeroPassword !== process.env.HERO_PASSWORD
    ) {
      throw new CustomError("Invalid HeroAdmin or HeroPassword", 401);
    }
    const admin = await Admin.findByIdAndDelete(id);
    if (!admin) {
      throw new CustomError("Admin not found", 404);
    }
    responseHandler(res, 200, "Admin deleted successfully");
  }
);

// @rule : Admin
// @desc : Admin all admins
// @route : POST /api/v1/admin/all-admins
// @access : Private
export const getAllAdmins = asyncHandler(
  async (_req: Request, res: Response) => {
    const { HeroAdmin, HeroPassword } = _req.body;
    if (!HeroAdmin || !HeroPassword) {
      throw new CustomError("Please provide HeroAdmin and HeroPassword", 400);
    }
    const admins = await Admin.find();
    responseHandler(res, 200, "Admins fetched successfully", admins);
  }
);

// @rule : Admin
// @desc : Admin Update
// @route: PUT /api/v1/admin/update:id
// @access: Private
export const updateAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, password } = req.body;
  if (!name || !password) {
    throw new CustomError("Please provide name and password", 400);
  }

  const admin = await Admin.findById(id);
  if (!admin) {
    throw new CustomError("Admin not found", 404);
  }

  admin.name = name;
  admin.password = password;

  await admin.save();

  responseHandler(res, 200, "Admin updated successfully", admin);
});
