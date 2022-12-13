import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";
<<<<<<< HEAD
import Home from "pages/Home";
import Settings from "pages/Settings";
import Notification from "pages/Notification";
import Profile from "pages/Profile";
import Marketplace from "pages/Marketplace";
import { MARKETPLACE_PATH,NOTIFICATIONS_PATH, PROFILE_PATH } from "./constants";

=======
import { NOTIFICATIONS_PATH, PROFILE_PATH } from "./constants";
>>>>>>> 9752f7294776129a51571137cc0cf33a244f0c8e

const Home = lazy(() => import('pages/Home'));
const Settings = lazy(() => import('pages/Settings'));
const Notification = lazy(() => import('pages/Notification'));
const Profile = lazy(() => import('pages/Profile'));



const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Layout>
<<<<<<< HEAD
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path={MARKETPLACE_PATH} element={<Marketplace />} />
            <Route path={NOTIFICATIONS_PATH} element={<Notification />} />
            <Route path={PROFILE_PATH} element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
=======
          <Suspense fallback={<p>loading...</p>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path={NOTIFICATIONS_PATH} element={<Notification />} />
              <Route path={PROFILE_PATH} element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
>>>>>>> 9752f7294776129a51571137cc0cf33a244f0c8e
        </Layout>
      </Router>
    </>
  );
};

export default RootRoute;
