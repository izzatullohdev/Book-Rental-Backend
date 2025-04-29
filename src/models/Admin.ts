import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IAdmin extends Document {
  name: string;
  password: string;
  role: "admin";
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name must be less than 50 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin"], // Faqat admin roli ruxsat etilgan
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing
userSchema.pre<IAdmin>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password comparison
userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const Admin = mongoose.model<IAdmin>("Admin", userSchema);
