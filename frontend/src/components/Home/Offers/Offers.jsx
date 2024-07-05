// import React from "react";
// import "./Offers.css";
// import contentData from './Offers.js';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const Offers = () => {
//   // Divide contentData into chunks of 4 for each slide
//   const chunks = [];
//   for (let i = 0; i < contentData.length; i += 4) {
//     chunks.push(contentData.slice(i, i + 4));
//   }

//   return (
//     <div className="offer-container bg-gray-100 rounded-2xl h-fit p-8 mt-5 mx-4 md:mx-20 mb-12">
//       <div className="offer-heading flex items-center gap-8">
//         <h1 className="font-bold text-4xl">Offers</h1>
//         <div className="tags flex gap-11 border-b-2 pb-1">
//           <a href="#">All Offers</a>
//           <a href="#">Hotels</a>
//           <a href="#">Cabs</a>
//           <a href="#">Tours</a>
//         </div>
//       </div>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {chunks.map((chunk, index) => (
//           <SwiperSlide style={{ height: 'fit-content' }} key={index}>
//             <div className="grid grid-cols-2 gap-6">
//               {chunk.map(item => (
//                 <div key={item.id} className="offer-item bg-white w-full rounded-2xl text-right p-5">
//                   <div className="flex gap-5 text-left">
//                     <div className="image rounded-lg w-32 h-32 overflow-hidden">
//                       <img
//                         className="w-full h-full object-cover"
//                         src={item.image.src}
//                         alt={item.image.alt}
//                       />
//                     </div>
//                     <div className="text">
//                       <h2 className="uppercase text-2xl font-bold mb-2 w-[303px]">
//                         {item.text.title}
//                       </h2>
//                       <hr className="w-12" style={{ borderColor: 'red' }} />
//                       <p className="mt-3">
//                         {item.text.description}
//                       </p>
//                     </div>
//                   </div>
//                   <button className="font-semibold text-right text-sky-700 hover:text-sky-500 text-xl mt-2">
//                     {item.button.label}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Offers;
import React from "react";
// import "./Offers.css";
import contentData from './Offers.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Offers = () => {
  // Divide contentData into chunks of 4 for each slide
  const chunks = [];
  for (let i = 0; i < contentData.length; i += 4) {
    chunks.push(contentData.slice(i, i + 4));
  }

  return (
    <div className="offer-container bg-gray-100 rounded-2xl h-fit p-8 mt-5 mx-4 md:mx-20 mb-12">
      <div className="offer-heading flex items-center gap-8">
        <h1 className="font-bold text-4xl">Offers</h1>
        <div className="tags flex gap-11 border-b-2 pb-1">
          <a href="#">All Offers</a>
          <a href="#">Hotels</a>
          <a href="#">Cabs</a>
          <a href="#">Tours</a>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunks.map((chunk, index) => (
          <SwiperSlide style={{ height: 'fit-content' }} key={index}>
            <div 
              className="grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                ...(window.innerWidth <= 768 && {
                  gridTemplateColumns: '1fr',
                })
              }}
            >
              {chunk.map(item => (
                <div key={item.id} className="offer-item bg-white w-full rounded-2xl text-right p-5">
                  <div className="flex gap-5 text-left">
                    <div className="image rounded-lg w-32 h-32 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.image.src}
                        alt={item.image.alt}
                      />
                    </div>
                    <div className="text">
                      <h2 className="uppercase text-2xl font-bold mb-2 w-[303px]">
                        {item.text.title}
                      </h2>
                      <hr className="w-12" style={{ borderColor: 'red' }} />
                      <p className="mt-3">
                        {item.text.description}
                      </p>
                    </div>
                  </div>
                  <button className="font-semibold text-right text-sky-700 hover:text-sky-500 text-xl mt-2">
                    {item.button.label}
                  </button>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Offers;
