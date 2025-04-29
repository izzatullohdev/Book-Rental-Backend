import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config(); // .env faylni o‘qib olish

const PORT = process.env.PORT || 5000;

// MongoDB ulanish
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1); // Database ulanishda xato bo‘lsa serverni o'chirib tashlaydi
  });
