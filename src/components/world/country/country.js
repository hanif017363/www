import React from "react";

const Country = (props) => {
  const { flags, name, capital } = props.country;
  return (
    <div>
      <img style={{ width: "300px", height: "200px" }} src={flags.png} alt="" />
      <h1>name: {name.common}</h1>
      <p>capital: {capital}</p>
    </div>
  );
};

export default Country;
