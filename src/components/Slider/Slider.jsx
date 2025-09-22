import { BsHeart, BsShare } from "react-icons/bs";
import "./Slider.scss";
export default function SliderCard({ sliderImages, sliderPosition }) {
  return (
    <div className="slider-wrapper">
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className="card"
          style={{ translate: `-${sliderPosition * 410}px` }}
        >
          <div className="card-img">
            <img src={image} alt="Card Image" />
          </div>
          <div className="card-content">
            <div className="row">
              <span className="name">White Swan Chair </span>
              <span className="icons">
                <BsHeart />
                <BsShare />
              </span>
            </div>
            <div className="row">
              <span className="price">$40</span>
              <button className="buy">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
