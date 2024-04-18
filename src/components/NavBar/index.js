import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  const isGameWon = score === 12

  return (
    <nav className="navbar1">
      <div className="logo-container1">
        <img
          className="game-logo-image1"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameWon ? (
        ''
      ) : (
        <div className="score-container1">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
