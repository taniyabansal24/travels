

// import mongoose from "mongoose";

// const tourPlanSchema = new mongoose.Schema({
//   day: { type: Number, required: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
// });

// const inclusionSchema = new mongoose.Schema({
//   type: { type: String, required: true },
// });

// const typeSchema = new mongoose.Schema({
//   //   id: Number,
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   price: { type: Number, required: true },
//   rating: { type: Number, required: true },
//   reviews: { type: Number, required: true },
//   location: { type: String, required: true },
//   days: { type: Number, required: true },
//   nights: { type: Number, required: true },
//   title: { type: String, required: true },
//   inclusions: [{ type: String, required: true }],
//   tourPlan: { type: [tourPlanSchema], required: true },
//   availableFrom: { type: Date, required: true },  // Added field
//   availableTill: { type: Date, required: true },  // Added field
// });

// const tourSchema = new mongoose.Schema(
//   {
//     //   id: Number,
//     category: { type: String, required: true, unique: true },
//     types: { type: [typeSchema], required: true },
//     description: { type: String, required: true },
//     // image: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Tour = mongoose.model("Tour", tourSchema);

// export default Tour;
import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  facilities: { type: String, required: true },
  image: { type: String, required: true },
  //checkout: { type: String } // Optional field for checkout information
});

const sightseeingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  places: [{ type: String, required: true }],
  duration: { type: String, required: true },
  placesCovered: { type: Number, required: true },
  image: { type: String, required: true }
});

const hotelSchema = new mongoose.Schema({
  timming: { type: String, required: true },
  name: { type: String, required: true },
  ratings: { type: String, required: true },
  location: { type: String, required: true },
  stayDate: { type: String, required: true },
  image: { type: String, required: true }
});

const tourPlanSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  car: [carSchema],  // Added car schema
  sightseeing: [sightseeingSchema],  // Added sightseeing schema
  hotels: [hotelSchema]  // Added hotel schema
});

const inclusionSchema = new mongoose.Schema({
  type: { type: String, required: true },
});

const typeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  location: { type: String, required: true },
  days: { type: Number, required: true },
  nights: { type: Number, required: true },
  title: { type: String, required: true },
  //photos: [{ type: String, required: true }],  // Added photos field
  photos: [
    {
      src: { type: String, required: true }
    }
  ],
  inclusions: [{ type: String, required: true }],
  tourPlan: { type: [tourPlanSchema], required: true },
  availableFrom: { type: Date, required: true },
  availableTill: { type: Date, required: true }
});

const tourSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    types: { type: [typeSchema], required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
