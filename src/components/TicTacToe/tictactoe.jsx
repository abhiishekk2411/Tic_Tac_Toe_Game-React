// import React from 'react'
// import './tictactoe.css';
// import circle_icon from '../../assets/circle.png.jpg'
// import cross_icon from '../../assets/cross.png.jpg'

// function TicTacToe() {
//   return (
//     <div>
//         <div className="container">
//             <h1 className='Title'>Tic Tac Toe Game</h1>
//             <div className="board">
//               <div className="row1">
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//               </div>
//               <div className="row2">
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//               </div>
//               <div className="row3">
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//                 <div className="boxes"></div>
//               </div>

//             </div>
//             <button className="reset">Reset</button>
            
            
//         </div>
        
      
//     </div>
//   )
// }

// export default TicTacToe;









import React from 'react';
import './tictactoe.css';
import circle_icon from '../../assets/circle.png.jpg';
import cross_icon from '../../assets/cross.png.jpg';

function TicTacToe() {
  return (
    <div className="container">
      <h1 className="Title">Tic Tac Toe </h1>
      
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
      
      <button className="reset">Reset Game</button>
    </div>
  );
}

export default TicTacToe;
