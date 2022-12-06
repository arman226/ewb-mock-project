import React from "react";
import { Button } from "@material-ui/core";

const CorporateProfile = () => {
  // return <>Corporate Profile</>;
  return (
    <div align={'justify'}>
      <h2>CORPORATE PROFILE</h2>
      
      <>
        The Birth of EastWest Bank
        <br />
        Established on July 6, 1994, EastWest Bank was the first recipient of a commercial banking license after the central monetary authority liberalized banking in the mid-1990s. Its first branch was opened along Sen. Gil Puyat Avenue in Makati City on August 1, 1994.​
        <br />
        <br />
        Its name is the result of the bank's desire to combine the traditional prudence, warmth and hospitality of the East and the efficiency and progressive-thinking of the West.
      </>
      <br />
      <>
        <Button variant="contained" onClick={() => {
            alert('CORPORATE PROFILE');
          }}
        >
          LEARN MORE
        </Button>
      </>
    </div>
  );
};

export default CorporateProfile;
