import { CorsOptions } from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000", // Dev Frontend (React, Next.js)
  "https://your-production-site.com", // Production Frontend
];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Cookie va Authorization header yuborishga ruxsat
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Ruxsat berilgan metodlar
  allowedHeaders: ["Content-Type", "Authorization"], // Frontenddan yuboriladigan headerlar
  optionsSuccessStatus: 200, // OPTIONS request muvaffaqiyatli bo‘lsa 200 qaytariladi
};
