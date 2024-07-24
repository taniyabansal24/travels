import React, { useState } from 'react';
import HotelSidebar from './HotelSidebar';
import HotelList from './HotelList';
import { useLocation } from 'react-router-dom';

function HotelPage() {
  const location = useLocation();
  const initialFilters = location.state || {
    //city: "",
    checkin: "",
    checkout: "",
    guests: "",
    price: "",
    location: "",
    minBudget: "",
    maxBudget: "",
    starRating: "",
    guestRating: "",
    propertyType: "",
    amenities: "",
    facilities: [],
    // location: "",
    // minBudget: "",
    // maxBudget: "",
    // starRating: "",
    // guestRating: "",
    // propertyType: "",
    // amenities: "",
    // facilities: [],
  };
  const [filters, setFilters] = useState(initialFilters);
  // const [filters, setFilters] = useState({
  //   location: "",
  //   minBudget: "",
  //   maxBudget: "",
  //   starRating: "",
  //   guestRating: "",
  //   propertyType: "",
  //   amenities: "",
  //   facilities: [],
  // });

  return (
    <div className="flex ">
      <HotelSidebar filters={filters} setFilters={setFilters} />
      <HotelList filters={filters} />
    </div>
  );
}

export default HotelPage;
