import { useParams } from 'react-router-dom';
import './tc.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faChevronDown,
  faChevronUp,
  faPerson,
  faCalendarAlt,
  faCheckCircle,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

const Ptour = () => {
  const { id } = useParams(); // Get the type _id from URL

  const [tourData, setTourData] = useState(null);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [expandedDays, setExpandedDays] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const { data } = await axios.get(`/api/tour/${id}`);
        setTourData(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchTour();
  }, [id]); // Fetch data when id changes


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    setSlideNumber((prev) =>
      direction === "l"
        ? prev === 0
          ? tourData.photos.length - 1
          : prev - 1
        : prev === tourData.photos.length - 1
        ? 0
        : prev + 1
    );
  };

  const increment = () => setNumberOfPersons((prev) => prev + 1);

  const decrement = () => {
    if (numberOfPersons > 1) setNumberOfPersons((prev) => prev - 1);
  };

  const handleDateChange = (event) => setSelectedDate(event.target.value);

  const toggleDay = (index) => {
    setExpandedDays((prev) =>
      prev.includes(index) ? prev.filter((day) => day !== index) : [...prev, index]
    );
  };
  if (!tourData) {
    return <div>Loading...</div>; // Display loading state
  }

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // return (
  //   <div className="page">
  //     <div className="top flex flex-col md:flex-row">
  //       <div className="image_slider w-full h-[285px] md:w-[738px] md:h-[386px]">
  //         <img src={`${backendUrl}${tourData.image}`} alt={tourData.name} />
  //       </div>
  //       <div className="context">
  //         <div className="w-full">
  //           <h2>{tourData.name}</h2>
  //           <p>{tourData.price} Per Person</p>
  //           <hr />
  //           <h3>Available From: {new Date(tourData.availableFrom).toLocaleDateString()}</h3>
  //           <h3>Available Till: {new Date(tourData.availableTill).toLocaleDateString()}</h3>
  //           <hr />
  //           <h3>Inclusions:</h3>
  //           <ul>
  //             {tourData.inclusions.map((inclusion, i) => (
  //               <li key={i}>
  //                 <span className="text-green-500" role="img" aria-label="tick">
  //                   &#10003;
  //                 </span>{' '}
  //                 {inclusion}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="main">
  //       <div className="tour_plan">
  //         <h2>Tour Plan</h2>
  //         {tourData.tourPlan.map((day, i) => (
  //           <div className="day" key={i}>
  //             <h3>
  //               Day {day.day}: {day.name}
  //             </h3>
  //             <p>{day.description}</p>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="book bg-gray-200 p-8 rounded-lg w-96">
  //         <h2>Book this Tour</h2>
  //         <div className="flex items-center mb-4 mt-4">
  //           <label htmlFor="date" className="mr-2">
  //             Select Date:
  //           </label>
  //           <input
  //             type="date"
  //             id="date"
  //             value={selectedDate}
  //             onChange={handleDateChange}
  //             className="bg-gray-300 px-2 py-1 rounded-md mr-2 cursor-pointer"
  //           />
  //         </div>
  //         <div className="date flex items-center mb-5">
  //           <h4 className="pr-5">Person: </h4>
  //           <button
  //             onClick={decrement}
  //             className="bg-gray-300 px-2 py-1 rounded-md mr-2"
  //           >
  //             -
  //           </button>
  //           <span>{numberOfPersons}</span>
  //           <button
  //             onClick={increment}
  //             className="bg-gray-300 px-2 py-1 rounded-md ml-2"
  //           >
  //             +
  //           </button>
  //         </div>
  //         <div className="flex items-center justify-center">
  //           <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
  //             Book Now
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );


return (
  <div className="page">
    {/* Image Slider and Overview */}
    <div className="top flex flex-col md:flex-row">
      {/* Image Slider */}
      <div className="relative w-full md:w-9/10 flex flex-wrap justify-between">
        {open && (
          <div className="slider mb-2.5 w-full h-[64vh]">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close top-2 right-2"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow text-4xl"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={tourData.photos[slideNumber].src}
                alt=""
                className="w-[98%] h-[59vh] object-cover"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow text-4xl"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelImages">
          {tourData.photos.map((photo, i) => (
            <div className="hotelImgWrapper" key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=""
                className="hotelImg"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Tour Details */}
      <div className="context">
        <div className="w-full">
          <h2 className="text-4xl font-extrabold mb-2">{tourData.name}</h2>
          <p className="text-xl text-blue-700 mb-4 font-bold">{tourData.price} Per Person</p>
          <hr className="mb-4" />
          <h3 className="text-2xl font-semibold">Inclusions:</h3>
          <ul className="pl-4 list-disc">
            {tourData.inclusions.map((inclusion, index) => (
              <li key={index} className="text-lg my-2 flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                {inclusion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {/* Tour Plan and Booking */}
    <div className="main flex flex-col md:flex-row">
      {/* Tour Plan */}
      <div className="tour_plan md:w-3/4">
        <h2 className="text-3xl font-bold mb-4">Tour Plan</h2>
        {tourData.tourPlan.map((day, index) => (
          <div
            key={index}
            className="day_card mb-4 p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="day_header" onClick={() => toggleDay(index)}>
              <h3 className="text-xl font-semibold flex items-center mr-3">
                <FontAwesomeIcon
                  icon={expandedDays.includes(index) ? faChevronUp : faChevronDown}
                  className="mr-2"
                />
                Day {day.day}: {day.title}
              </h3>
              <p className="md:text-lg mb-2 cursor-pointer text-sm">{day.description}</p>
            </div>
            {expandedDays.includes(index) && (
              <div className="day_content mt-2 pl-4 border-l-2 border-gray-300 transition-all transform scale-105">
                {/* Car Details */}
                {day.car && day.car.length > 0 && (
                  <div className="car_card mb-4">
                    <p className="text-sm pl-3 text-gray-500 mb-2">{day.car[0].checkout}</p>
                    <div className="flex items-baseline">
                    <FontAwesomeIcon icon={faCar} />
                    <h4 className="text-lg font-bold mb-2 ml-3">{day.car[0].destination}</h4>
                    <p></p>
                    </div>
                    <ul className="space-y-2">
                      {day.car.map((car, carIndex) => (
                        <li key={carIndex} className="card flex p-2 border rounded-lg shadow-sm">
                          <img
                            src={car.image || "default-car-image.jpg"}
                            alt={car.type}
                            className="card_image w-1/3 mr-4 object-cover rounded-md"
                          />
                          <div className="card_content flex-grow">
                            <p>Type: {car.type}</p>
                            <p>Model: {car.model}</p>
                            <p>Facilities: {car.facilities}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Sightseeing Details */}
                {day.sightseeing && day.sightseeing.length > 0 && (
                  <div className="sightseeing_card mb-4">
                    <h4 className="text-lg font-bold mb-2">Sightseeing in {day.sightseeing[0].name}</h4>
                    <ul className="space-y-2">
                      {day.sightseeing.map((sight, sightIndex) => (
                        <li key={sightIndex} className="card flex p-2 border rounded-lg shadow-sm">
                          <img
                            src={sight.image || "default-sightseeing-image.jpg"}
                            alt={sight.location}
                            className="card_image w-1/3 mr-4 object-cover rounded-md"
                          />
                          <div className="card_content flex-grow">
                            <p>Location: {sight.location}</p>
                            <p>Duration: {sight.duration}</p>
                            <p>Places Covered: {sight.places.join(", ")}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Hotel Details */}
                {day.hotels && day.hotels.length > 0 && (
                  <div className="hotel_card mb-4">
                    <h4 className="text-lg font-bold mb-2">{day.hotels[0].timming}</h4>
                    <ul className="space-y-2">
                      {day.hotels.map((hotel, hotelIndex) => (
                        <li key={hotelIndex} className="card flex p-2 border rounded-lg shadow-sm">
                          <img
                            src={hotel.image || "default-hotel-image.jpg"}
                            alt={hotel.name}
                            className="card_image w-1/3 mr-4 object-cover rounded-md"
                          />
                          <div className="card_content flex-grow">
                            <p>Name: {hotel.name}</p>
                            <p>Ratings: {hotel.ratings}</p>
                            <p>Location: {hotel.location}</p>
                            <p>Stay Date: {hotel["stay date"]}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Booking Section */}
      <div className="book bg-gray-200 p-8 rounded-lg md:w-1/4 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Book this Tour</h2>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-xl" />
          <label htmlFor="date" className="mr-2">Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="bg-gray-300 px-2 py-1 rounded-md cursor-pointer"
          />
        </div>
        <div className="flex items-center mb-5">
          <FontAwesomeIcon icon={faPerson} className="mr-2 text-xl" />
          <h4 className="pr-5">Persons: </h4>
          <button
            onClick={decrement}
            className="bg-gray-300 px-2 py-1 rounded-md mr-2"
          >
            -
          </button>
          <span className="text-lg font-semibold">{numberOfPersons}</span>
          <button
            onClick={increment}
            className="bg-gray-300 px-2 py-1 rounded-md ml-2"
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  </div>
);
};


export default Ptour;
