// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props
  return (
    <navbar className="navbar-container">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-name"> Emoji Game </h1>
      </div>
      {isGameOver ? (
        <div className="plain-card"></div>
      ) : (
        <div className="score-card">
          <p className="score"> Score: {score} </p>
          <p className="top-score"> Top Score: {topScore} </p>
        </div>
      )}
    </navbar>
  )
}

export default NavBar
