export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Player : {turn.player} Selected : Row - {turn.square.row + 1} , Column
          -{turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
