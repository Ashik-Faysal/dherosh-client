import React, { useState, useEffect } from "react";
import SingleCardPage from "./SingleCardPage";
import Marquee from "react-fast-marquee";

const CardSectionPage=()=> {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load JSON data when the component mounts
    fetch("card.json")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error loading JSON data: " + error));
  }, []);

  return (
    <div>
      <div className="mx-auto text-center my-8 md:w-1/2">
        <h1 className="text-4xl my-2 uppercase font-bold">
          We Understand your <span className="text-[#6F4E37]">business</span>
        </h1>

        <p>
          {" "}
          Nam at lectus urna duis convallis convallis tellus id. Pharetra
          pharetra massa massa ultricies mi quis hendrerit. Odio ut sem nulla
          pharetra diam sit amet nisl suscipit. Mi sit amet mauris quis.
        </p>
      </div>
      <Marquee  className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
        {cards.map((card) => (
          <SingleCardPage key={card.id} card={card} className="border p-4 rounded-md" />
         
        ))}
      </Marquee>
    </div>
  );
}

export default CardSectionPage;
