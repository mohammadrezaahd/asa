import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  category_slug: { type: String, required: true },
  orientation: { type: String, default: "horizontal" },
  date: { type: Date, default: Date.now },
  intro: {
    subtitle: { type: String },
    title: { type: String },
    bgImage: { type: String }
  },
  description: {
    heading: {
      title: { type: String },
      subtitle: { type: String }
    },
    content: { type: String },
    avatar: {
      image: { type: String },
      name: { type: String },
      role: { type: String },
      text: { type: String }
    }
  },
  details: {
    title: { type: String },
    items: [{
      label: { type: String },
      value: { type: String }
    }]
  },
  gallery: [{
    image: { type: String },
    alt: { type: String }
  }],
  resume: {
    title: { type: String },
    content: { type: String },
    signature: {
      name: { type: String },
      role: { type: String },
      text: { type: String }
    },
    quote: {
      text: { type: String },
      author: { type: String }
    }
  }
});

const projectModel = {
  modelName: "Project",
  schema: schema,
};

export default projectModel;
