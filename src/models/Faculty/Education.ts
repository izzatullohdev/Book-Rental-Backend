// education.model.ts
import { Schema, model, Document } from "mongoose";

export interface IEducationType extends Document {
  title: string;
}

const educationTypeSchema = new Schema<IEducationType>({
  title: {
    type: String,
    required: [true, "Ta'lim turi majburiy"],
  },
});

export const EducationType = model<IEducationType>(
  "EducationType",
  educationTypeSchema
);
