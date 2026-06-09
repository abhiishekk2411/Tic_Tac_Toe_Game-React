import React, { useRef, useState } from 'react';
import './tictactoe.css';
import circle_icon from '../../assets/Circle.jpg';
import cross_icon from '../../assets/Cross.jpg';


let data = ["", "", "", "", "", "", "", "", ""];
function TicTacToe() {
  let [Count, setCount] = useState(0);
  let [Lock, setLock] = useState(0);
  let titleRef=useRef(null);

  const toggle = (e, num) => {
    if (Lock) {
      return 0;
    }
    if (Count % 2 == 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(Count + 1);
    }
    else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(Count + 1);
    }
    checkWin();

  }
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") won(data[2]);
    if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") won(data[5]);
    if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") won(data[8]);
    if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") won(data[6]);
    if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") won(data[7]);
    if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") won(data[8]);
    if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") won(data[8]);
    if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") won(data[6]);
  }
  const won=(winner)=>{
    setLock(true);
    if(winner==="x"){
      titleRef.current.innerHTML=`congratulations:<img src=${cross_icon}>`
    }
    else {titleRef.current.innerHTML=`congratulations:<img src=${circle_icon}>`}

  }
  return (
    <div className="container">
      <h1 className="Title ref={titleRef}">Tic Tac Toe </h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
          <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>

      <button className="reset">Reset Game</button>
    </div>
  );
}

export default TicTacToe;
