import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true, // ✅ Yeh yahan hona chahiye, as second argument
  }
);

export const Book = mongoose.model('Book', bookSchema); // Naam "Book" rakhna better hai
