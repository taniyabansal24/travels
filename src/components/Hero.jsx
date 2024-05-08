import { useState, useEffect } from "react";
// import img1 from "../assets/s.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s1.jpg";

// import img3 from "../assets/s3.jpg";
// import img2 from "../assets/s2.jpg";
// import img3 from "../assets/s3.jpg";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: img2,
      title: "Discover the World with Us",
      description:
        "Discover hidden gems and secret wonders with our offbeat travel experiences. ",
    },
    {
      id: 2,
      imageUrl: img3,

      title: "Discover the World with Us",
      description:
        "Discover hidden gems and secret wonders with our offbeat travel experiences.",
    },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="hero h-[85vh]  relative  ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.5s ease", // Add transition effect for opacity
              opacity: index === currentSlide ? 1 : 0, // Set opacity based on current slide
            }}
          >
            <div className="slide-content  text-center absolute top-[30%] left-0 right-0 text-blue-900 text">
              <h2 className="text-4xl md:text-7xl text-white">{slide.title}</h2>
              <p className="text-[1rem] md:text-[1.3rem] text-white mt-6 md:">
                {slide.description}
              </p>
            </div>
            {/* <form action="" className="absolute top-[90%] left-[20%]">
            <input className="" type="text" placeholder="Enter Destination" />
            <input className="ml-20" type="text" placeholder="budget" />
          </form> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
