import express from "express";
import facultyRoutes from "./faulty.route";
import groupRoutes from "./group.route";
import educationRoutes from "./education.route";
import tredTypeRoutes from "./tredtype.route";

const router = express.Router();

// Root: /api/v1/faculty
router.use("/", facultyRoutes); // GET /, POST /
router.use("/group", groupRoutes); // /group/**
router.use("/education", educationRoutes); // /education/**
router.use("/tredtype", tredTypeRoutes); // /tredtype/**

export default router;
