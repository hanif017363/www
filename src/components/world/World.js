import React, { useEffect, useState } from "react";
import "./World.css";
import Country from "./country/country";

const World = () => {
  const [world, setWorld] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((y) => setWorld(y));
  }, []);
  return (
    <div className="world">
      {world.map((country) => (
        <Country key={country.common} country={country} />
      ))}
    </div>
  );
};

export default World;
