/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isGameOver: false,
    presentSore: 0,
  }

  shuffleEmojiList = emojisList => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = emojisListLength => {
    const {topScore} = this.state

    if (topScore < emojisListLength) {
      this.setState({
        score: 0,
        topScore: emojisListLength,
        clickedEmojisList: [],
        isGameOver: true,
        presentSore: emojisListLength,
      })
    } else
      [
        this.setState({
          score: 0,
          clickedEmojisList: [],
          isGameOver: true,
          presentSore: emojisListLength,
        }),
      ]
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiClicked = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length
    console.log(id)
    console.log(emojisList)

    if (isEmojiClicked) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgain = () => {
    this.setState({isGameOver: false})
  }

  render() {
    const {score, topScore, isGameOver, clickedEmojisList, presentSore} =
      this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffleEmojiList(emojisList)
    return (
      <div className="emoji-game-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="game-card">
          {isGameOver ? (
            <WinOrLoseCard score={presentSore} playAgain={this.playAgain} />
          ) : (
            <ul className="content-card">
              {shuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
