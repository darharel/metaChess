const puzzle = PUZZLES[Math.floor(Math.random() * PUZZLES.length)];
const board = Chessboard('board', {
  position: puzzle.fen,
  draggable: true,
  onDrop: onDrop
});

const game = new Chess(puzzle.fen);
const statusEl = document.getElementById("status");

function onDrop(source, target) {
  const move = game.move({ from: source, to: target, promotion: 'q' });

  if (move === null) return 'snapback';

  const sanMove = move.san;
  if (sanMove === puzzle.solution) {
    statusEl.innerText = "✅ Correct! Checkmate.";
  } else {
    statusEl.innerText = `❌ Incorrect. You played ${sanMove}. Try again.`;
    setTimeout(() => board.position(puzzle.fen), 1000);
  }
}
