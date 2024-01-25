import React from "react";

function Pets(props) {
    console.log("Pet component props: ", props)
    return(
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Breed: {props.breed}</h4>
        </div>
    )
}

export default Pets