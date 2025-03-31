import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, default: null },
  image: { type: String },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
});

const User = mongoose.models.User || mongoose.model("User", schema);

export default User;
