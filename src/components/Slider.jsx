import { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const data = [
  "https://images.pexels.com/photos/875862/pexels-photo-875862.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6939232/pexels-photo-6939232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3596283/pexels-photo-3596283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2479939/pexels-photo-2479939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/11031402/pexels-photo-11031402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider w-screen h-[calc(100vh-5rem)] relative">
      <div
        className="wrapper w-[500vw] h-full flex duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          src={data[0]}
          alt="image1"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[1]}
          alt="image2"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[2]}
          alt="image3"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[3]}
          alt="image4"
          className="w-screen h-full object-cover"
        />
        <img
          src={data[4]}
          alt="image5"
          className="w-screen h-full object-cover"
        />
      </div>
      <div className="icons absolute left-0 right-0 m-auto w-fit bottom-20 flex gap-10">
        <div
          className="icon bg-black/20 w-20 h-14 text-white flex items-center justify-center border border-white/30 backdrop-blur-xl cursor-pointer select-none"
          onClick={prevSlide}
        >
          <WestIcon />
        </div>
        <div
          className="icon bg-black/20 w-20 h-14 text-white flex items-center justify-center border border-white/30 backdrop-blur-xl cursor-pointer select-none"
          onClick={nextSlide}
        >
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
