import React from "react";
import Buttons from "./buttons";

function Grid(props) {
    return (
        <div className="gridContainer">
            <div className="gridItem">item 1</div>
            <div className="gridItem">item 2</div>
            <div className="gridItem">item 3</div>
            <div className="gridItem">item 4</div>
           <Buttons />
            {/* <button>Small Time DJ</button>
            <button>Party DJ</button>
            <button>Left Blue</button>
            <button>Right Blue</button>
            <button>DJ One</button>
            <button>DJ Two</button>
            <button>DJ Three</button>
            <button>DJ Four</button>
            <button>Make Sound</button> */}
        </div>
    )
}

export default Grid