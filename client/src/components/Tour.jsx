import React from "react";
import "./TourStyles.css";
import TourData from "./TourData";
import Tour1 from "../Assets/munnar.jpg";
import Tour2 from "../Assets/pondicherry.jpg";
import Tour3 from "../Assets/gokarna.jpg";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Recent Tours</h1>
        <p className="font-sofias tagline">
          Unveiling Our World, One Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Munnar"
            text="Discover Munnar’s misty hills, lush tea gardens, and serene mountain charm."

            button="Book Now"
          />
          <TourData
            image={Tour2}
            heading="Pondicherry"
            text="Experience French charm, coastal serenity, and vibrant cafes in the heart of South India."

            button="Book Now"
          />
          <TourData
            image={Tour3}
            heading="Gokarna"
            text="Unwind on pristine beaches, explore ancient temples, and soak in Gokarna’s peaceful coastal vibe."

            button="Book Now"
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
