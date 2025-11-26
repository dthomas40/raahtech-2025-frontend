import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./AboutAddressComponent.css"; // external CSS for styling

const AboutAddressComponent = () => {
  const addresses = [
    {
      id: 1,
      location: "Atlanta, USA",
      address: "3280 Peachtree Rd NE, 7th Floor, Atlanta, GA 30305",
    },
    {
      id: 2,
      location: "Sibiu, Romania",
      address: "Strada Constantin Noica 57, Sibiu 550169, Romania",
    },
    {
      id: 3,
      location: "Mumbai, India",
      address:
        "A-40, Rock Enclave Hindustan Naka, Kandivali (West), Mumbai 400067 Maharashtra-India",
    },
  ];

  return (
    <div className="AboutAddressContainer">
      {addresses.map((item) => (
        <div key={item.id} className="AboutAddressCard">
          <FaMapMarkerAlt className="AboutAddressIcon" />
          <div className="AboutAddressTextContainer">
            <h3 className="AboutAddressTextLocation">{item.location}</h3>
            <p className="AboutAddressTextAddress">{item.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutAddressComponent;
