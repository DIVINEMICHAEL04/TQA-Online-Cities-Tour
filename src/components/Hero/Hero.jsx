import "./Hero.css";
import pexels from "../../assets/pexels.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="Hero">
      <img src={pexels} alt="Founder" className="hero-image" />

      <div className="main-content">
      <div className="hero-content">
        <TypeAnimation
          className="typewriter-title"
          sequence={[
            "Talk Queen Academy",
            5000,
            "TQA Online Cities Tour",
            5000,
          ]}
          wrapper="h1"
          speed={20}
          repeat={Infinity}
          cursor={true}
        />

      </div>
        <div className="hero-subtitle">
          <p>Equip</p>
          <span>❖</span>
          <p>Empower</p>
          <span>❖</span>
          <p>Elevate</p>
        </div>
        </div>
    </section>
  );
}

export default Hero;