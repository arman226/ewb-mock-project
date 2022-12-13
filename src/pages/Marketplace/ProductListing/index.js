import React ,{lazy} from "react";
import {Container} from "@material-ui/core"


const Product = lazy(() => import("./Product"));

const ProductListing = () => {
    return (
        <Container>
            <div className="row">
                <h2>Product Listing</h2>
            </div>
            <div className="row">
                <Product />
            </div>
        </Container>
    );
};

export default ProductListing;


