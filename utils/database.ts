import mongoose from "mongoose";

export const connectBD = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/fitness")
    .then((res) => console.log("success"))
    .catch((err) => {
      console.log(err);
    });
};
