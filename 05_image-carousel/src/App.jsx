import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2565919/pexels-photo-2565919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

export default function App() {
  const [current, setCurrent] = useState(1);
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <main>
      {images.map(
        (image, index) =>
          current === index && (
            <div key={image} className="image-container">
              <img src={image} alt="images" />
              <div className="buttons-container">
                <button onClick={() => nextSlide()}>next</button>
                <button onClick={() => prevSlide()}>previous</button>
              </div>
            </div>
          )
      )}
    </main>
  );
}
