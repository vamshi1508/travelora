import React from "react";
import "./Destination.css";
import parisPic1 from "../Assets/mumbai1.jpg";
import parisPic2 from "../Assets/mumbai2.jpg";
import italy1 from "../Assets/kerala1.jpg";
import italy2 from "../Assets/kerala2.jpg";
import maldivs1 from "../Assets/telangana1.jpg";
import maldivs2 from "../Assets/telangana2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Popular Destination</h1>
        <p className="font-sofias tagline">
          Where adventure awaits at every turn!
        </p>
        <DestinationData
          heading="Mumbai, India: The City of Dreams!"
          text="Experience the vibrant energy of Mumbai, India. Stroll along the scenic Marine Drive as the Arabian Sea waves kiss the shore, and admire the iconic Gateway of India standing tall in Colaba. Dive into the rich heritage of Chhatrapati Shivaji Maharaj Terminus and the historic Elephanta Caves. Wander through the colorful lanes of Crawford Market and immerse yourself in the cinematic pulse of Bollywood. Savor flavorful street food—from spicy vada pav to sweet jalebi—at bustling local stalls. From the colonial elegance of South Mumbai to the fast-paced streets of Bandra and Andheri, the city blends tradition, ambition, and culture. Discover the magic of the City of Dreams as you explore its dynamic skyline, witness unforgettable sunsets over the sea, and create memories that echo Mumbai’s unstoppable spirit."

          img1={parisPic1}
          img2={parisPic2}
          className="first-desc"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Kerala, India: God's Own Country!"
          text="Explore the serene beauty of Kerala, India, often hailed as God's Own Country. Cradled between the Western Ghats and the Arabian Sea, Kerala offers a tranquil and unforgettable escape. Cruise through the lush backwaters of Alleppey on a traditional houseboat, witness the graceful sway of palm trees, and unwind amidst emerald-green paddy fields. Marvel at the cultural richness of Kochi’s colonial streets, the spiritual calm of Guruvayur Temple, and the misty charm of Munnar’s tea plantations. Indulge in mouthwatering local cuisine infused with coconut and spices, and rejuvenate with ancient Ayurvedic therapies. Kerala, with its harmonious blend of nature, tradition, and wellness, is a timeless destination that promises soulful experiences. Immerse yourself in this enchanting land, where every moment echoes peace and beauty."

          img1={italy1}
          img2={italy2}
          className="first-desc-reverse"
          button="Set Your Plan!"
        />
        <DestinationData
          heading="Telangana, India: A Tapestry of Heritage and Modern Charm!"
          text="Uncover the hidden gems of Telangana, a state where royal heritage, architectural splendor, and contemporary vibrancy come together in perfect harmony. Begin your journey in Hyderabad, the City of Pearls, where the majestic Charminar and Golconda Fort echo tales of a glorious past. Stroll through the bustling lanes of Laad Bazaar, indulge in the rich flavors of Hyderabadi biryani, and experience the opulence of Chowmahalla and Falaknuma Palaces. Venture beyond the capital to explore the ancient temple town of Bhadrachalam, the serene beauty of the Laknavaram Lake, and the mystical Ramappa Temple—a UNESCO World Heritage site. Telangana offers a captivating blend of culture, cuisine, and natural beauty, promising unforgettable moments and soulful experiences at every step."

          img1={maldivs1}
          img2={maldivs2}
          className="first-desc"
          button="Set Your Plan!"
        />
      </div>
    </>
  );
};

export default Destination;
