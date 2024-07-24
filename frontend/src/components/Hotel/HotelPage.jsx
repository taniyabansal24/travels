import React, { useState } from 'react';
import HotelSidebar from './HotelSidebar';
import HotelList from './HotelList';

function HotelPage() {
  const [filters, setFilters] = useState({
    location: "",
    minBudget: "",
    maxBudget: "",
    starRating: "",
    guestRating: "",
    propertyType: "",
    amenities: "",
    facilities: [],
  });

  return (
    <div className="flex ">
      <HotelSidebar filters={filters} setFilters={setFilters} />
      <HotelList filters={filters} />
    </div>
  );
}

export default HotelPage;
