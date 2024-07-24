import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewCount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    taxes: {
      type: Number,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    star: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
        required: true,
      },
    ],
    facilities: [
      {
        type: String,
        required: true,
      },
    ],
    featured: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
