import { Schema, model, Document } from "mongoose";

interface IFaculty extends Document {
  title: string;
}

const FacultySchema = new Schema<IFaculty>(
  {
    title: {
      type: String,
      required: [true, "Fakultet nomi majburiy"],
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
