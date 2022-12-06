import React, { lazy } from "react";
import { Route, Routes } from "react-router";
import NavMenu from "components/navMenu";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default RootRoute;
