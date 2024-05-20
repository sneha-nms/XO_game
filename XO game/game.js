
const cells = document.querySelectorAll('[data-cell]');
const statusDisplay = document.getElementById('status');
// const restartButton = document.getElementById('restart');
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let currentPlayer = Math.random() > 0.5 ? PLAYER_X : PLAYER_O;
let gameActive = true;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    if (!gameActive || cell.textContent !== '') return;

    cell.textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
        gameActive = false;
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
    } else if ([...cells].every(cell => cell.textContent !== '')) {
        gameActive = false;
        statusDisplay.textContent = 'Draw!';
    } else {
        currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
    }
}

function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

 let Restart=document.querySelector('#Restart');
 Restart.addEventListener('click',()=>{
   cells[0].textContent ="";
   cells[1].textContent ="";
   cells[2].textContent ="";
   cells[3].textContent ="";
   cells[4].textContent ="";
   cells[5].textContent ="";
   cells[6].textContent ="";
   cells[7].textContent ="";
   cells[8].textContent ="";

 }
 )

// function restartGame() {
  

// }

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);






