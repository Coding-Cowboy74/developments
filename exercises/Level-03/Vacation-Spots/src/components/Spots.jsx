import React from "react";

function Spots(props) {



    return (
        <div>
            <h2>Vacation Place: {props.place}</h2>
            
            <h3>The costs of the vacation spot is: {props.price}</h3>
            
            <h3 className="last-element">The estimated time to go to the vacation spot is: {props.timeToGo}</h3>
            <hr></hr>
        </div>
    )
}

export default Spots