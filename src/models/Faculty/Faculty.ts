// faculty.model.ts
import { Schema, model, Document, Types } from "mongoose";

export interface IFaculty extends Document {
  title: string;
  groups: Types.ObjectId[];
  educationTypes: Types.ObjectId[];
  tredTypes: Types.ObjectId[];
}

const facultySchema = new Schema<IFaculty>({
  title: {
    type: String,
    required: [true, "Fakultet nomi majburiy"],
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  ],
  educationTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: "EducationType",
    },
  ],
  tredTypes: [
    {
      type: Schema.Types.ObjectId,
      ref: "TredType",
    },
  ],
});

export const Faculty = model<IFaculty>("Faculty", facultySchema);
