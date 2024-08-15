export default function GameOver({ winner, onClickRestartGame }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} won !</p> : <p>Game is draw !!</p>}
      <button onClick={onClickRestartGame}>Rematch</button>
    </div>
  );
}
