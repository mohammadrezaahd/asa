import { IUser } from "@/interfaces/DTOs/users";
import mongoose from "mongoose";



const schema = new mongoose.Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: function (this: IUser) {
      return !this.isOAuth; // فقط برای کاربران غیر-OAuth
    },
  },
  isOAuth: { type: Boolean, default: false }, // اضافه شد
  image: { type: String },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  phoneNumber: { type: Number, required: false },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", schema);

export default User;
