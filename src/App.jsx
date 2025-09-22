import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import {
  SiAirbnb,
  SiMastercard,
  SiPaypal,
  SiStripe,
  SiUber,
  SiVisa,
} from "react-icons/si";
import {
  BsArrowLeft,
  BsArrowRight,
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsPatchCheck,
  BsShieldCheck,
  BsStarFill,
  BsTruck,
  BsTwitter,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import "./App.scss";
import { FaKitchenSet } from "react-icons/fa6";
import { PiBowlFood, PiCouch, PiOfficeChair, PiSneaker } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";

function App() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);
  const sliderImages = [
    "images/popular-1.png",
    "images/popular-2.png",
    "images/popular-3.png",
    "images/popular-1.png",
    "images/popular-2.png",
    "images/popular-3.png",
  ];

  const nextSlide = () => {
    console.log(sliderPosition);
    if (sliderPosition >= sliderImages.length - 3) {
      setSliderPosition(0);
    } else {
      setSliderPosition((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    console.log(sliderPosition);
    if (sliderPosition <= 0) {
      setSliderPosition(sliderImages.length - 3);
    } else {
      setSliderPosition((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        <Hero />
        <div className="trust-section">
          <h1>Trusted by 20,000+ companies</h1>
          <div className="trust-section-companies">
            <SiMastercard />
            <SiAirbnb />
            <SiUber />
            <SiPaypal />
            <SiVisa />
            <SiStripe />
          </div>
        </div>
        <div className="about-section">
          <div className="about-img">
            <img src="images/about-img.png" alt="About Us Picture" />
          </div>
          <div className="about-content">
            <h1>About Us</h1>
            <p>
              All of our furniture uses the best materials and choices for our
              customers.All of our furniture uses the best materials{" "}
            </p>
            <div className="about-content-card">
              <BsShieldCheck />
              <div className="about-content-card-content">
                <h2>Best Quality</h2>
                <p>All of our furniture uses the best materials and choices</p>
              </div>
            </div>
            <div className="about-content-card">
              <BsPatchCheck />
              <div className="about-content-card-content">
                <h2>100% Secure</h2>
                <p>All of our furniture uses the best materials and choices</p>
              </div>
            </div>
            <div className="about-content-card">
              <BsTruck />
              <div className="about-content-card-content">
                <h2>Free Shpping</h2>
                <p>All of our furniture uses the best materials and choices</p>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-section">
          <div className="popular-content">
            <div className="article">
              <h1>Our Popular Furniture</h1>
              <p>
                All of our furniture uses the best materials and choices for our
                customers.All of our furniture uses the best materials and
                choices for our customers.
              </p>
            </div>
            <div className="controls">
              <button onClick={prevSlide}>
                <BsArrowLeft />
              </button>
              <button onClick={nextSlide}>
                <BsArrowRight />
              </button>
            </div>
          </div>
          <Slider sliderImages={sliderImages} sliderPosition={sliderPosition} />
        </div>
        <div className="all-furniture-section">
          <h1>All Furniture</h1>
          <div className="tabs">
            {["Shop By Room", "Shop By Category", "Shop By Style"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`tab ${index === currentTab ? "active" : ""}`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
          <div className="content">
            <div className="content-img">
              <img src="images/content-img.png" alt="Content Picture" />
            </div>
            <div className="content-options">
              <button className="content-option">
                <PiCouch />
                <p>Living Room</p>
              </button>
              <button className="content-option">
                <FaKitchenSet />
                <p>Kitchen</p>
              </button>
              <button className="content-option">
                <PiBowlFood />
                <p>Dining Room</p>
              </button>
              <button className="content-option">
                <PiOfficeChair />
                <p>Office</p>
              </button>
              <button className="content-option">
                <IoBedOutline />
                <p>Bed Room</p>
              </button>
              <button className="content-option">
                <PiSneaker />
                <p>Hallway</p>
              </button>
            </div>
          </div>
        </div>
        <div className="customers-section">
          <div className="customers-section-img">
            <div className="background"></div>
            <img src="images/customers-img.png" alt="" />
          </div>
          <div className="customers-section-content">
            <h1>Our customers are very important to us</h1>
            <p>
              All of our furniture uses the best materials and choices for our
              customers.All of our furniture uses the best materials and choices
              for our customers.
            </p>
            <div className="customers-section-content-review">
              <img src="images/avatar.png" alt="" />
              <div>
                <h2>Mh Jibon</h2>
                <p>
                  <BsStarFill />
                  <span>4.8</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-section">
          <div className="subscribe-section-content">
            <h1>Subscribe to get the latest news about us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore at dolore.
            </p>
            <div className="subscribe-section-input">
              <BsEnvelopeFill />
              <input type="email" placeholder="Enter your email" />
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <div>
              {" "}
              <h1>DudeShape</h1>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="footer-content-social">
                <h1>Follow Us :</h1>
                <BsFacebook />
                <BsTwitterX />
                <BsInstagram />
                <BsYoutube />
              </div>
            </div>
            <div>
              <h1>Take a tour</h1>
              <ul>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Product</a>
                </li>
                <li>
                  <a>Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Our Company</h1>
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Media</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Subscribe</h1>
              <p>Subscribe to get the latest news from us</p>
              <div className="footer-content-subscribe-input">
                <input type="text" placeholder="Email Address" />
                <button type="button">
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright">Copyright © 2025 DudeShape</p>
      </footer>
    </>
  );
}

export default App;
