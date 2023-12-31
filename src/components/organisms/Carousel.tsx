import { useEffect, useState } from "react";
const slides = [
  "images/carousel1.jpg",
  "images/carousel2.jpg",
  "images/carousel3.jpg",
];
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mx-4 flex pt-24 overflow-hidden">
      {slides.map((slide, i) => {
        return (
          <img
            key={i}
            src={slide}
            className={`min-w-full rounded-2xl transition-all duration-500`}
            style={{
              transform: `translateX(${-100 * current}%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
