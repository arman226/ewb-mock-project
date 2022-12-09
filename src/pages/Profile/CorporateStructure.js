import React from "react";
import { Button } from "@material-ui/core";
import Photo from "assets/images/user.png";

const CorporateStructure = () => {
  // return <>Corporate Structure</>;
  return (
    <div align={"justify"}>
      <h2>CORPORATE STRUCTURE</h2>

      <div>
        <h4>Board of Directors</h4>
        <img
          src={Photo}
          alt="Board Member Photo"
          style={{ width: "10%", height: "10%" }}
        />
      </div>
      <div>
        <h4>Senior Management</h4>
        <img
          src={Photo}
          alt="Senior Member Photo"
          style={{ width: "10%", height: "10%" }}
        />
      </div>
      <>
        <Button
          variant="contained"
          onClick={() => {
            alert("CORPORATE STRUCTURE");
          }}
        >
          LEARN MORE
        </Button>
      </>
    </div>
  );
};

export default CorporateStructure;
