/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from "react";

function DiceBox(props) {

    return (
        <div className="board">
            <div className="die">
                {props.number}
            </div>
        </div>
        
    )
}

export default DiceBox