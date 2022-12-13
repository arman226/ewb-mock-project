import React, { lazy, Suspense } from "react";

const ProductListing = lazy(() => import('./ProductListing'));
const Filter = lazy(() => import("./Filter" ));
const Search = lazy(() => import("./Search" ));

const Marketplace = () => {
   return (
    <Suspense fallback="<>loading...<>">
      <div className="container">
        <Search/>
        <br/>
        <Filter/>
        <br/>
        <ProductListing />
      </div>
    </Suspense>
  );
};

export default Marketplace;