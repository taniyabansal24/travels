import asyncHandler from "../middleware/asyncHandler.js";
import Cab from "../models/cabModel.js";

const getCabs = asyncHandler(async (req, res) => {
    const cabs = await Cab.find({});
    res.json(cabs);
  });

  const getCabsById = asyncHandler(async (req, res) => {
    const cab = await Cab.findById(req.params.id);
  
    if (cab) {
      return res.json(cab);
    } else {
      res.status(404);
      throw new Error("Cab not found");
    }
  });
  
export {getCabs, getCabsById};