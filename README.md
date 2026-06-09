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

# 🎮 How to Play

1. The game starts with **Player X** (Cross).
2. Players take turns clicking on any empty box.
3. The first player to get **3 in a row** (horizontally, vertically, or diagonally) wins.
4. The title updates to announce the winner and the board locks.
5. Click **Reset Game** to start a new round.

---

## 🙌 Acknowledgements

- Built as a beginner React project to practice hooks (`useState`, `useRef`) and DOM manipulation.


## 👤 Author

Abhishek Choudhary
> ⭐ If you found this helpful, consider giving it a star on GitHub!
