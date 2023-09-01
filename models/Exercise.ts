import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  bodyPart: {
    type: String,
  },
  equipment: {
    type: String,
    required: true,
  },
  gifUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  Loved: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});
export default mongoose.models.Exercise ||
  mongoose.model("Exercise", ExerciseSchema);
