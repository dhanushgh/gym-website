import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad  */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club in the Town</span>
        </div>

        {/* Hero heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              For the winners who train for thier gains, we help you achieve it.
            </span>
          </div>
        </div>

        {/* experience figures  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={120} start={89} delay="5" postFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={850} start={790} delay="5" postFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={40} start={25} delay="5" postFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons  */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right side  */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero image  */}
        <img src={Hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calories  */}
        {/* <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burnt</span>
            <span>220 kcal</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
