import './index.css'

const NavBar = props => {
  const {score, time} = props
  return (
    <navbar className="navbar">
      <div className="website-logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="score-and-timer-card">
        <li className="score-heading">
          {' '}
          <p> Score: <span className="score"> {score} </span>{' '} </p>
        </li>
        <li className="timer-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="sec-heading">
            {' '}
            <span className="timer"> {time} </span> sec{' '}
          </p>
        </li>
      </ul>
    </navbar>
  )
}

export default NavBar
