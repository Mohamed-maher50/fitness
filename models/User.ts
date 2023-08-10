import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
  },
  email: {
    type: String,
  },
  password: String,
});
const User = mongoose.model("User", userSchema);
export { User };
