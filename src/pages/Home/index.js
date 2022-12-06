import React, { useEffect } from "react";
import NAVPU from "./NAVPU";
import Products from "./Products";
import Requirements from "./Requirements";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 pt-5 text-center">
          <Products />
        </div>
        <div className="col-md-6 pt-5 text-center">
          <NAVPU />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 pt-5 text-center">
          <Requirements />
        </div>
      </div>
    </div>
  );
};

export default Home;
