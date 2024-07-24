import asyncHandler from "../middleware/asyncHandler.js";
import Hotel from "../models/hotelModel.js";

const getHotels = asyncHandler(async (req, res) => {
    const hotels = await Hotel.find({});
    res.json(hotels);
  });
  
export {getHotels};