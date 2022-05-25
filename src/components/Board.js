import React,{useState} from "react";
import Square from "./Square";

function Board(){

    const [ square, setSquare ] = useState(Array(9).fill(null));
    const [ X, setX ] = useState(true);

    const winner = calculateWinner(square);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Player Turn: ' + (X ? 'X' : 'O');
    }

    const rederSquare = (i) => {
        return(
            <Square value = { square[i] } onClick = { () => handleClick(i) } />
        )
    }

    const handleClick = (i) => {
        const squares = square.slice();

        if( square[i] === null ){

        squares[i] = X ? 'X' : 'O';
        setSquare(squares)
        setX(!X);

        }else{
            alert("can't do that");
        }
        
    }

    function calculateWinner(squares){
        const lines= [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for ( let i = 0 ; i < lines.length; i++ ) {

            const [a,b,c] = lines[i];

            if( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
                return squares[a];
            }

        }
        
        return null;

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

            {status}   

        </div>
    )

}

export default Board;