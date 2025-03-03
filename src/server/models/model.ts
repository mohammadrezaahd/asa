import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  file: { type: String, required: true },
  position: { type: [Number, Number, Number], required: true },
  rotation: { type: [Number, Number, Number], required: true },
  scale: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  lights: { type: Array, required: true },
  gallery: { type: [String], required: false },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }],
});

const Model = mongoose.models.Model || mongoose.model("Model", schema);

export default Model;
