import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";
import Home from "pages/Home";
import Settings from "pages/Settings";
import Notification from "pages/Notification";
import Profile from "pages/Profile";
import Marketplace from "pages/Marketplace";
import { MARKETPLACE_PATH,NOTIFICATIONS_PATH, PROFILE_PATH } from "./constants";


const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path={MARKETPLACE_PATH} element={<Marketplace />} />
            <Route path={NOTIFICATIONS_PATH} element={<Notification />} />
            <Route path={PROFILE_PATH} element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default RootRoute;
