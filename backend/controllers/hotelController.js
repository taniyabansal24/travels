import asyncHandler from "../middleware/asyncHandler.js";
import Hotel from "../models/hotelModel.js";

const getHotels = asyncHandler(async (req, res) => {
    const hotels = await Hotel.find({});
    res.json(hotels);
  });

  const getHotelsById = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
  
    if (hotel) {
      return res.json(hotel);
    } else {
      res.status(404);
      throw new Error("Hotel not found");
    }
  });
  
export {getHotels, getHotelsById};