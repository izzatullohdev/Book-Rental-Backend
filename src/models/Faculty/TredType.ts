import { Schema, model, Document } from "mongoose";

interface ITredType extends Document {
  title: string;
}
const tredTypeSchema = new Schema<ITredType>({
  title: {
    type: String,
    required: [true, "Tred turi majburiy"],
  },
});

export const TredType = model<ITredType>("TredType", tredTypeSchema);
