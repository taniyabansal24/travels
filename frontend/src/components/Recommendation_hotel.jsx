
import hotel_data from "./reco_hotel";
import HotelCard from "./HotelCard";

const Recommendation_hotel = () => {
  return (
    <div className="bg-gray-100">
      <div className="popular w-[90%] mx-auto p-4">
        <h1 className="text-2xl font-bold my-4">Featured Hotels</h1>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hotel_data.map((item, i) => {
            return (
              <HotelCard
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                nights={item.nights}
                days={item.days}
                price={item.price}
                ratings={item.ratings}
                description={item.description}
                address={item.address}
              />
            );
          })}
        </div>
        <div className="flex  mt-6 justify-center">
            <a href="/hotel">
          <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all">
           View More
          </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Recommendation_hotel;
