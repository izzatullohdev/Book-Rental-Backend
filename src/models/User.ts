import { Document, model, Schema, Types } from "mongoose";

interface IUser extends Document {
  firstName: string;
  lastName: string;
  faculty: Types.ObjectId;
  course: number;
  group: string;
}
const UserSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "Ism kirgish majburiy!"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: [true, "Familiya majburiy"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
      required: [true, "Fakultet majburiy"],
    },
    course: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },
    group: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<IUser>("User", UserSchema);
