import React, { lazy, Suspense } from "react";

const ProductListing = lazy(() => import('./ProductListing'));
const Filter = lazy(() => import("./Filter" ));
const Search = lazy(() => import("./Search" ));

const Marketplace = () => {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <ProductListing />
    </div>
>>>>>>> b7d65dde4fb37bcc01cbfbf95890953b549c774b
  );
};

export default Marketplace;