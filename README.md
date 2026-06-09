# 🎮 Tic-Tac-Toe (React + Vite)

A classic, interactive **2-Player Tic-Tac-Toe Game** built using **React.js** and bundled with **Vite** for blazing-fast development and performance. 

## 🚀 Features

- **Smooth Turn-Based Gameplay**: Alternates seamlessly between player `X` and player `O`.
- **Win Detection**: Instantly checks rows, columns, and diagonals to declare a winner.
- **Dynamic Header UI**: Displays standard game instructions or transitions into a stylized "Congratulations" banner featuring the winner's icon upon a win.
- **Smart Move Lock**: Prevents overwriting already clicked cells or making further moves after a match concludes.
- **Instant Reset**: Clear the board state, reset the move counters, and unlock the board dynamically with a single click.

## 🛠️ Tech Stack

- **Frontend Library:** React.js (Hooks utilized: `useState`, `useRef`)
- **Build Tool:** Vite
- **Styling:** Custom CSS3 (Flexbox & Grid layout)

## 📁 Project Structure

```text
Tic_Tac_Toe_game-react/
├── public/
└── src/
    ├── assets/
    │   ├── Circle.png
    │   └── Cross.png
    ├── components/
    │   └── TicTacToe/
    │       ├── tictactoe.jsx
    │       └── tictactoe.css
    ├── App.jsx
    ├── main.jsx
    └── index.css
