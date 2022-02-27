import React, { useEffect, useState } from 'react';
import './style.css';

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={() => onClick()}>
            {value}
        </button>
    );
};

const Board = () => {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
    const [hasWinner, setHasWinner] = useState(false);

    useEffect(() => {
        console.log(hasWinner);
        if (checkWinner()) {
            setHasWinner(true);
        }
    });

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return true;
            }
        }
    };

    const handleClick = (i) => {
        if (squares[i] === null) {
            setSquare((prevState) => {
                prevState[i] = isPlayerOneTurn ? 'X' : 'O';
                return prevState;
            });

            setIsPlayerOneTurn((prevState) => !prevState);
        }
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            {hasWinner &&
                (isPlayerOneTurn ? (
                    <span>Player Two is the Winner</span>
                ) : (
                    <span>Player One is the Winner</span>
                ))}
        </div>
    );
};

const TicTacToe = () => {
    return <Board />;
};
export default TicTacToe;
