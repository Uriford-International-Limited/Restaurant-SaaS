import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "super-admin"; // 👈 added super-admin
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["user", "admin", "super-admin"], 
    default: "user"  // 👈 normal signup এ সবসময় "user" হবে
  },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
