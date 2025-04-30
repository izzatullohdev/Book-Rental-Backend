import { Schema, model, Document } from "mongoose";

export interface IGroup extends Document {
  title: string;
}

const groupSchema = new Schema<IGroup>({
  title: {
    type: String,
    required: [true, "Guruh nomi majburiy"],
  },
});

export const Group = model<IGroup>("Group", groupSchema);
