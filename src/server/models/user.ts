import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" }
});

const User = mongoose.models.User || mongoose.model("User", schema);

export default User;
