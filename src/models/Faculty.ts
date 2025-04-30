import { Schema, model, Document } from "mongoose";

interface IFaculty extends Document {
  title: string;
  group: string;
  course: string;
}

const FacultySchema = new Schema<IFaculty>(
  {
    title: {
      type: String,
      required: [true, "Fakultet nomi majburiy"],
      trim: true,
      unique: true,
    },
    group: {
      type: String,
      required: [true, "Gruh nomi majburiy"],
      trim: true,
      unique: true,
    },
    course: {
      type: String,
      required: [true, "Kurs raqami majburiy"],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Faculty = model<IFaculty>("Faculty", FacultySchema);
