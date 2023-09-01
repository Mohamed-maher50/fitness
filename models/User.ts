import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "https://shorturl.at/juHR2",
    },
    email: {
      type: String,
      required: [true, "this filed required"],
      unique: [true, "email already exist"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
