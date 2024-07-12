import PropTypes from "prop-types";

function HotelCard({ hotel }) {
  return (
    <div className="border border-red-200 items-center justify-center rounded-lg p-4 shadow bg-white mb-4 flex flex-col md:flex-row ">
      <div className="md:flex-shrink-0  ">
        <img
          src={hotel.imageUrl}
          alt={`Image of ${hotel.name}`}
          className="h-48 w-full md:w-48 object-cover md:rounded-lg "
        />
        <div className="flex items-center gap-3 mt-2">
          {hotel.images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Additional view ${index + 1}`}
              className="h-12 w-12 object-cover rounded-lg"
            />
          ))}
          <div className="text-blue-600 text-sm cursor-pointer">View All</div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center">
            <span className="text-xs font-bold bg-gray-200 rounded px-2 py-1">
              MMT Luxe
            </span>
            <h3 className="font-bold text-lg ml-2">{hotel.name}</h3>
          </div>
          <p className="text-sm text-blue-500">
            {hotel.location} | {hotel.distance}
          </p>
          <p className="text-xs bg-gray-200 inline-block rounded px-2 py-1 mt-1">
            {hotel.category}
          </p>
          <p className="text-green-600 text-sm mt-2">Breakfast Included</p>
          <p className="text-brown-600 text-sm mt-2">
            Avail 15% discount on spa, food & beverages
          </p>
        </div>
        <div className="mt-4 flex justify-between items-end">
          <div>
            <span className="bg-blue-100 text-blue-800 font-semibold py-1 px-2 rounded">
              {hotel.rating}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              ({hotel.reviewCount} Ratings)
            </span>
          </div>
          <div>
            <p className="text-lg font-bold">₹ {hotel.price}</p>
            <p className="text-sm text-gray-500">
              + ₹ {hotel.taxes} taxes & fees
            </p>
            <p className="text-sm">Per Night</p>
          </div>
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login to Book Now & Pay Later!
          </button>
        </div>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    taxes: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// export default HotelCard;

function HotelList() {
  const hotels = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      name: "Goa Marriott Resort & Spa",
      location: "Panjim",
      distance: "2.9 km drive to Deltin Royale",
      category: "Couple Friendly",
      rating: 4.4,
      reviewCount: 1126,
      price: 19600,
      taxes: 3528,
      images: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      ],
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      name: "Holiday Inn Resort Goa",
      location: "Cavelossim",
      distance: "3.5 km drive to Palolem Beach",
      category: "Family Friendly",
      rating: 4.6,
      reviewCount: 986,
      price: 18000,
      taxes: 3000,
      images: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww",
      ],
    },
    // More hotels with their respective images
  ];

  return (
    <div className="w-full md:w-3/4 m-auto bg-white p-4">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
}
export default HotelList;
