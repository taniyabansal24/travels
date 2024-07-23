import React, { useState } from "react";
import "./Hotelview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faUtensils,
  faMapMarkerAlt,
  faTree,
  faBed,
  faCheckCircle,
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty
} from "@fortawesome/free-solid-svg-icons";
import data from "./HotelviewData";
import Modal from "./Modal";

const Hotelview = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const {
    hotelTitle,
    hotelAddress,
    hotelDistance,
    hotelPriceHighlight,
    roomCategory,
    photos,
    price,
    inclusions,
    hotelDetails,
    foodAndDining,
    locationAndSurroundings,
    roomDetailsAndAmenities,
    activitiesAndNearbyAttractions,
    rating,
  } = data[0];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleModalOpen = (content) => {
    setModalContent(content);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star-icon" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStarEmpty} className="star-icon" />
        ))}
      </div>
    );
  };
  return (
    <div>
      <div className="">
        {open && (
          <div className="slider fixed w-[100vw] h-[100vh]">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close top-5 right-5"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow m-5 text-[50px]"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="w-[80%] h-[80vh]"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow m-5 text-[50px]"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper p-12">
          <h1 className="hotelTitle">{hotelTitle}</h1>
          {/* <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotelAddress}</span>
          </div>
          <span className="hotelDistance">
            {hotelDistance}
          </span>
          <span className="hotelPriceHighlight">
            {hotelPriceHighlight}
          </span>
          <button className="bookNow">Reserve or Book Now!</button> */}

          {/* Image Slider and Overview */}
          <div className="w-full gap-[30px] pb-[12px] flex flex-col md:flex-row">
            {/* Image Slider */}
            <div className="hotelImages w-[94%] gap-3">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper w-[32%]" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg rounded-md gap-1"
                  />
                </div>
              ))}
            </div>
            {/* Hotel Details */}
            <div className="hotelContext">
              <div className="w-full">
                <h5 className="text-xl font-semibold">{roomCategory}</h5>
                <p className="text-[15px] text-black font-normal">
                  (Fits 2 Adults)
                </p>
                <hr className="my-4" />
                <h3 className="text-xl font-semibold">Inclusions:</h3>
                <ul className="pl-4 list-disc">
                  {inclusions.map((inclusion, index) => (
                    <li key={index} className="text-lg my-2 flex items-center">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mr-2 text-green-500"
                      />
                      {inclusion}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs">Per Night</p>
                <h4 className="ml-4 text-3xl font-bold">
                  ₹{price}{" "}
                  <span className="text-xs font-normal">+ All Taxes</span>
                </h4>
                <button className="bookNow">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              {/* Hotel Description */}
              <p className="hotelDesc">
                {hotelDetails.description}{" "}
                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleModalOpen(foodAndDining)}
                >
                  More
                </span>
              </p>
              {/* More Sections */}
              <div className="more-sections">
                <div className="section-button">
                  <FontAwesomeIcon icon={faUtensils} className="section-icon" />
                  <h5
                    className="text-sm font-normal"
                    onClick={() => handleModalOpen(foodAndDining)}
                  >
                    Food & Dining
                  </h5>
                </div>
                <div className="section-button">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="section-icon"
                  />
                  <h3
                    className="text-sm font-normal"
                    onClick={() => handleModalOpen(locationAndSurroundings)}
                  >
                    Location & Surroundings
                  </h3>
                </div>
                <div className="section-button">
                  <FontAwesomeIcon icon={faBed} className="section-icon" />
                  <h3
                    className="text-sm font-normal"
                    onClick={() => handleModalOpen(roomDetailsAndAmenities)}
                  >
                    Room Details & Amenities
                  </h3>
                </div>
                <div className="section-button">
                  <FontAwesomeIcon icon={faTree} className="section-icon" />
                  <h3
                    className="text-sm font-normal"
                    onClick={() =>
                      handleModalOpen(activitiesAndNearbyAttractions)
                    }
                  >
                    Activities & Nearby Attractions
                  </h3>
                </div>
              </div>
            </div>
            {/* Ratings Section */}
            <div className="hotelDetailsPrice">
            <div className="ratings">
                <h3>Rating: {rating} </h3>
                {renderStars(rating)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={!!modalContent}
        onClose={() => setModalContent(null)}
        title={modalContent?.title}
        description={modalContent?.description}
        img={modalContent?.img}
      />
    </div>
  );
};

export default Hotelview;
