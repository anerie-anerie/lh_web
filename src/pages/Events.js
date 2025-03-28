import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import SoLLogo from "../img/sollogo.svg";
import SoLText from "../img/soltext.svg";
import Sparkle from "../img/sparkle.svg";


// should auto go to the start of the page

const Events = () => {
  const sectionRefs = {
    lunarhacks: useRef(null),
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  // Handle URL hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Get the section from URL hash
      if (hash && sectionRefs[hash]?.current) {
        sectionRefs[hash].current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div 
      className="sol"
    >
      {/* Styled button linking to the home page */}
      <a href="/" className="event-button" >LunarHacks</a>
      
      <div 
        style={{ display:"flex" }}
      >
        <img 
          src={SoLLogo} alt="Spark of Luminosity logo"
          style={{ width:"50%" }}
        />
        <div
          style={{ width:"50%", paddingTop:"6%", paddingBottom:"10%", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}
        >
          <img src={SoLText} alt="Spark of Luminosity" 
            style={{ width:"80%" }}
          />
          <div>
            <p
              style={{ color:"#EC70A1", fontWeight:"bold", fontSize:"24px", marginBottom:"24px" }}
            >
              April 26th @ Carleton University
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScbndoP_zVvj2RsKam4-mmZ6n_YTY5-LmsqQERjhe_FAnFYfg/viewform?usp=sharing" className="reg-button"
              style={{ fontSize:"28px", fontWeight:"bold", paddingLeft:"10%", paddingRight:"10%" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER NOW!
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ display:"flex", justifyContent:"space-between", marginTop:"18px"
          }}
      >
        <div>
          <p className="solheader">WHAT IS IT?</p>
          <p className="soltext" >
            CHANGE THIS TEXT AS PER FIGMA COMMENT - LunarHacks is a local highschool-led non-profit organization that aims to empower women+ in 
            STEM. We will be running a children’s symposium, Spark of Luminosity, this spring in 
            collaboration with a local robotics team, Spark Youth Robotics Club, to introduce elementary 
            school students to coding, robotics, and some basic STEM concepts!
          </p>
        </div>
        <img
        src={Sparkle}
        alt="sparkle"
        className="sparkle"
        />

      </div>
      <div
        style={{ marginTop:"18px" }}
      >
        <p className="solheader">WHO CAN PARTICIPATE?</p>
        <p className="soltext" >
          Any children ages 8 to 14!
          Older than 16? Apply to become a speaker and lead a workshop
        </p>
      </div>
      <div
        style={{ marginTop:"60px" }}
      >
        <p className="solheader">I HAVE MORE QUESTIONS!</p>
        <p className="soltext">
  Email us at 
  <a href="mailto:hello@lunarhacks.com" style={{ color:"#BA1757", fontWeight:"bold" }}> hello@lunarhacks.com</a> 
  <span style={{ margin: "0 4px" }}>or</span> 
  <a href="mailto:spark.youthrc@gmail.com" style={{ color:"#BA1757", fontWeight:"bold" }}> spark.youthrc@gmail.com</a>; 
  we'd be happy to chat!
</p>


      </div>
    </div>
  );
};

export default Events;
