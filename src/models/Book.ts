import { Schema, model, Document } from "mongoose";

interface IBook extends Document {
  title: string;
  author: string;
  year: number;
  language: string;
  pages: number;
  counter: number;
  status: string;
  registerID: string;
  description: string;
  photo: string;
  pdf: string | null;
  category: string | null;
  type: string;
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: [true, "Kitob nomi majburiy"],
  },
  author: {
    type: String,
    required: [true, "Muallif nomi majburiy"],
  },
  year: {
    type: Number,
    required: [true, "Yil majburiy"],
  },
  language: {
    type: String,
    required: [true, "Til majburiy"],
  },
  pages: {
    type: Number,
    required: [true, "Sahifa soni majburiy"],
  },
  counter: {
    type: Number,
    required: [true, "Soni majburiy"],
  },
  status: {
    type: String,
    required: [true, "Status majburiy"],
  },
  registerID: {
    type: String,
    required: [true, "Register ID majburiy"],
  },
  description: {
    type: String,
    required: [true, "Description majburiy"],
  },
  photo: {
    type: String,
    required: [true, "Photo majburiy"],
  },
  pdf: {
    type: String,
    required: [true, "PDF majburiy"],
  },
  category: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: [true, "Type majburiy"],
  },
});

export const Book = model<IBook>("Book", bookSchema);
