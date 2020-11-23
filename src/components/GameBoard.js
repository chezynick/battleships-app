import React from "react";

const GameBoard = ({ board, updateBoard }) => {
  const clickHandler = (e) => {
      const keyPressed = e.target.innerText
    board.forEach((a) =>
      a.key.toString() === keyPressed ? a.missed=true : ""
    );
    updateBoard([...board])
  };

  return (
    <div className="board">
      {board.map((element) => {
        return (
          <div className="square" key={element.key} onClick={clickHandler}>
            {element.key}
          </div>
        );
      })}
    </div>
  );
};
export default GameBoard;
