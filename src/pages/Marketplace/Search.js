import React from "react";
import {Container} from "@material-ui/core";

const Search = () => {
    return (
        <Container>
            <div className="row">
                <input type="text" />
                <button>Search</button>
            </div>
        </Container>
    );
};

export default Search;