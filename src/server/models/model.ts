import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  position: {
    type: [Number, Number, Number],
    required: true,
  },
  rotation: {
    type: [Number, Number, Number],
    required: true,
  },
  scale: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  lights: {
    type: Array,
    required: true,
  },
});

const modelSchema = { title: "Model", schema };

export default modelSchema;
