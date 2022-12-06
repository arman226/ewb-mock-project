import React from "react";
import { Button } from "@material-ui/core";

const BusinessOperations = () => {
  // return <>Business Operations</>;
  return (
    <div align={'justify'}>
      <h2>BUSINESS OPERATIONS</h2>

      <>
        EastWest Bank, established in 1994, is one of the fastest-growing banks in the country today. It caters to the financial needs of consumers, middle market corporates, and the mass affluent. Through its vast network of stores nationwide, it offers a wide range of banking products and services, as well as allied financial services: non-life insurance brokerage, bancassurance, and leasing.
      </>
      <br />
      <>
        <Button variant="contained" onClick={() => {
            alert('BUSINESS OPERATIONS');
          }}
        >
          LEARN MORE
        </Button>
      </>
    </div>
  );
};

export default BusinessOperations;
