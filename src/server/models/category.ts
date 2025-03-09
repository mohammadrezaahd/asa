import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  subs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  models: [{ type: mongoose.Schema.Types.ObjectId, ref: "Model" }],
});

const Category = mongoose.models.Category || mongoose.model("Category", schema);

export default Category;