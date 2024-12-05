import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>CSEC Chatbot</h1>
        <h2>CSEC-ASTU DEVELOPEMENT PROJECT</h2>
        <h3>
        CSEC is the esteemed technology club at ASTU, bringing together a diverse group of talented software developers. This vibrant community fosters collaboration, encouraging members to share knowledge and create a seamless experience for all involved. Through teamwork and innovation, CSEC empowers its members to excel in the ever-evolving tech landscape.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human"
                  ? "/human.jpeg": "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:-hello! can you help me?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:-hey there! I am here to help you!",
                2000,
                () => {
                  setTypingStatus("human");
                },
                "Human:What is AI?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: Smart machines mimicking humans",
                2000,
                () => {
                  setTypingStatus("human");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
