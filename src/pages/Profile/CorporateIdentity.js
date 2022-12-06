import React from "react";
import { Button } from "@material-ui/core";

const CorporateIdentity = () => {
  // return <>Corporate Identity</>;
  return (
    <div align={'justify'}>
      <h2>CORPORATE IDENTITY</h2>
      
      <>Our Logo</>
      <br />
      <>Our Vision</>
      <br />
      <>Our Mission</>
      <br />
      <>Our Corporate Core Values</>
      <br />
      <>
        <Button variant="contained" onClick={() => {
            alert('CORPORATE IDENTITY');
          }}
        >
          LEARN MORE
        </Button>
      </>
    </div>
  );
};

export default CorporateIdentity;
