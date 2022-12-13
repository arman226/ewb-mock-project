import React, { lazy, Suspense } from "react";

const ProductListing = lazy(() => import('./ProductListing'));
const Filter = lazy(() => import("./Filter" ));
const Search = lazy(() => import("./Search" ));

const Marketplace = () => {
  return (
    <div>
      <ProductListing />
    </div>
  );
};

export default Marketplace;