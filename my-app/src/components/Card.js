import React, { useState } from "react";
import "./Card.css";
import image1 from "./1.png"; 
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.png"

const Card = () => {
  const [ready, setReady] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="card-container">
      <div className="left-section">
        <div className="circle-images">
          {ready ? (
            <>
              <div className="circle">
                <img src={image1} alt="Circle 1" className="circle-img" />
              </div>
              <div className="circle">
                <img src={image2} alt="Circle 2" className="circle-img" />
              </div>
              <div className="circle">
                <img src={image3} alt="Circle 3" className="circle-img" />
              </div>
              <div className="circle">
                <img src={image4} alt="Circle 4" className="circle-img" />
              </div>
            </>
          ) : (
            <p>Loading images...</p>
          )}
        </div>
        <div className="text-section">
          <h2>Explorin Academy</h2>
          <p>3+ offline centers</p>
        </div>
      </div>
      <div className="right-section">
        <div className="alert-icon">
          <span>!</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
