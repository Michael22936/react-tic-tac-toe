import React,{useState} from "react";
import Square from "./Square";

function Board(){

    const [square, setSquare] = useState(Array(9).fill(null));

    const rederSquare = (i) => {
        return(
            <Square value = { square[i] } onClick = { () => handleClick(i) } />
        )
    }

    const handleClick = () => {
        
    }

    return(
        <div className="board">
            <div className="board-row">
                {rederSquare(0)}
                {rederSquare(1)}
                {rederSquare(2)}
            </div>

            <div className="board-row">
                {rederSquare(3)}
                {rederSquare(4)}
                {rederSquare(5)}
            </div>

            <div className="board-row">
                {rederSquare(6)}
                {rederSquare(7)}
                {rederSquare(8)}
            </div>

        </div>
    )

}

export default Board;