import phone_outline from "../../img/login/phone_outline.png";
import screenshot1 from "../../img/login/screenshots/screenshot1.png";
import screenshot2 from "../../img/login/screenshots/screenshot2.png";
import screenshot3 from "../../img/login/screenshots/screenshot3.png";
import screenshot4 from "../../img/login/screenshots/screenshot4.png";
import classes from "./LoginCarousel.module.scss";
import { useState, useEffect } from "react";
const images = [screenshot2, screenshot4, screenshot3, screenshot1];
const SECONDS = 4000;

const LoginCarousel = () => {
  const [count, setCount] = useState(0);
  const targetIndex = (count / SECONDS) % images.length;
  useEffect(() => {
    setInterval(() => {
      setCount((pre) => pre + SECONDS);
    }, SECONDS);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${phone_outline})` }}
      className={classes.carousel}
    >
      <div className={classes.carousel__image}>
        {images.map((path, index) => (
          <img
            src={path}
            alt={path}
            key={path}
            className={targetIndex === index ? classes.show : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LoginCarousel;
