import { useState } from "react";
import "./App.css";
import { flushSync } from "react-dom";

const images = [
  "https://images.pexels.com/photos/17498732/pexels-photo-17498732/free-photo-of-light-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2929248/pexels-photo-2929248.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/16377866/pexels-photo-16377866/free-photo-of-woman-wearing-dress-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
];

function App() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setCount((prev) => (prev !== images.length ? prev + 1 : 1));
      });
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Show More images</button>

      <div className="grid grid-cols-3 gap-3 mt-4">
        {images.map((image, index) =>
          index + 1 <= count ? (
            <img key={image} src={image} className="w-60 rounded" />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}

export default App;
