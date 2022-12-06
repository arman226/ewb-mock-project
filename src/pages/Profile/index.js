import React, { useEffect } from "react";
// import Header from "../Common/Header"
// import Banner from "../Common/Banner"
// import SiteMap from "../Common/SiteMap"
// import Footer from "../Common/Footer"
import BusinessOperations from "./BusinessOperations";
import CorporateProfile from "./CorporateProfile";
import CorporateIdentity from "./CorporateIdentity";
import CorporateStructure from "./CorporateStructure";
import KnowMore from "./KnowMore";

const Profile = () => {
  return (
    <div>
      {/* <div>
        <Header />
        <br />
        <Banner />
      </div> */}
      <div>
        <BusinessOperations />
        <br />
        <CorporateProfile />
        <br />
        <CorporateIdentity />
        <br />
        <CorporateStructure />
        <br />
        <KnowMore />
      </div>
      {/* <div>
        <SiteMap />
        <br />
        <Footer />
      </div> */}
    </div>
  );
};

export default Profile;
