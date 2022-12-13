import React from "react";
import {Container} from "@material-ui/core"

const Filter = () => {
    return (
        <Container>
            <div className="row">
                <label>Title/Name</label>
                <input type="text" />
            </div>
            <div className="row">
                <label>Type</label>
                <input type="text" />
            </div>
            <div className="row">
                <button>Search</button>
            </div>
        </Container>
        
    );
};

export default Filter;