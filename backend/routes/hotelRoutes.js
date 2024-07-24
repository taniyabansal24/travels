import express from "express";
const router = express.Router(); 
import {
  getHotels
} from "../controllers/hotelController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getHotels)
// .post( createBlog);
// router.route("/:id").get(getBlogsById).put(protect, admin, updateBlog).delete(protect, admin, deleteBlog);

export default router;
