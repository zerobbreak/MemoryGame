
const Scoreboard = ({currentScore, bestScore}) => {
  return (
    <div>
      <h2>Current Score: {currentScore}</h2>
      <p>Best Score: {bestScore}</p>
    </div>
  )
}

export default Scoreboard