import React, { lazy, useEffect } from "react";
import { Container } from "reactstrap";


const LoanProducts = lazy(() => import('./Products'));
const NAVPU = lazy(() => import('./NAVPU'));
const Requirements = lazy(() => import('./Requirements'));

const Home = () => {
  return (
    <LoanProducts/>
  );
};

export default Home;
