import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import NavMenu from "components/navMenu";
import Layout from "components/Layout";
import { NOTIFICATIONS_PATH, PROFILE_PATH ,MARKETPLACE_PATH } from "./constants";

const Home = lazy(() => import('pages/Home'));
const Settings = lazy(() => import('pages/Settings'));
const Notification = lazy(() => import('pages/Notification'));
const Profile = lazy(() => import('pages/Profile'));
const Marketplace = lazy(() => import('pages/Marketplace'));


const RootRoute = () => {
  return (
    <>
      <Router>
        <NavMenu />
        <Layout>
          <Suspense fallback={<p>loading...</p>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path={MARKETPLACE_PATH} element={<Marketplace />} />
              <Route path={NOTIFICATIONS_PATH} element={<Notification />} />
              <Route path={PROFILE_PATH} element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
};

export default RootRoute;
