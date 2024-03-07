// Write your code here.
import {Component} from 'react'
import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, score} = props
  const maxScoreReached = score === 12

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <div className="score-result-card">
        <h1 className="result-heading">
          {' '}
          You {maxScoreReached ? 'Won' : 'Lose'}{' '}
        </h1>
        <div className="result-score-card">
          <p className="score-heading"> {maxScoreReached ? "Best Score" : "Score"} </p>
          <p className="result-score"> {score}/12 </p>
        </div>
        <div className="play-again-btn-card">
          <button className="play-again-btn" onClick={onClickPlayAgain}>
            {' '}
            Play Again{' '}
          </button>
        </div>
      </div>
      <div className="result-image-card">
        <img
          src={
            maxScoreReached
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
          className="won-game-img"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
