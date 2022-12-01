import React, { useEffect } from "react";
import NAVPU from "./NAVPU";
import Products from "./Products";
import Requirements from "./Requirements";

const Home = () => {
  return (
    <div>
      <Products />
      <br />
      <NAVPU />
      <br />
      <Requirements />
    </div>
  );
};

export default Home;
