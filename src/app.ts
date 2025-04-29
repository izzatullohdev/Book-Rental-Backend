import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions";
import compression from "compression";
import hpp from "hpp";

dotenv.config();

const app = express();

// 1. Body parsing (ALWAYS FIRST!)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Security Middlewares
app.use(cookieParser()); // Cookies parsing
app.use(cors(corsOptions)); // Cors before security headers
app.use(
  helmet({
    crossOriginResourcePolicy: false, // Optional
    contentSecurityPolicy: false, // Optional
  })
);
app.use(hpp());

// 3. Logger
app.use(morgan("dev"));

// 4. Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// 5. Compression
app.use("*", compression());

// 6. Routers
app.use("/api/v1", router);

// 7. Error handler
app.use(errorHandler);

// 8. DB connect
connectDB();

export default app;
