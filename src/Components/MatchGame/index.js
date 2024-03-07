import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailImage from '../ThumbnailImage'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      time: 60,
      imagesList: props.imagesList,
      tabsList: props.tabsList,
      activeTabId: props.tabsList[0].tabId,
      activeImageUrl: props.imagesList[0].imageUrl,
      isGameOver: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(
      prevState => ({time: prevState.time - 1}),
      () => {
        const {time} = this.state
        if (time === 0) {
          clearInterval(this.timerID)
          this.setState({isGameOver: true})
        }
      },
    )
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  clickThumbnail = imageUrl => {
    const {activeImageUrl, imagesList} = this.state
    const randomImgUrl =
      imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
    if (activeImageUrl === imageUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        activeImageUrl: randomImgUrl,
      }))
    } else {
      clearInterval(this.timerID)
      this.setState({isGameOver: true})
    }
  }

  onClickPlayAgain = () => {
    const {imagesList} = this.state
    this.setState({
      score: 0,
      time: 60,
      isGameOver: false,
      activeImageUrl: imagesList[0].imageUrl,
    })
    this.componentDidMount()
  }

  render() {
    const {
      score,
      time,
      activeTabId,
      activeImageUrl,
      imagesList,
      tabsList,
      isGameOver,
    } = this.state
    const activeThumbnailImagesList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )
    return (
      <div className="bg-container">
        <NavBar score={score} time={time} />
        <div className="game-card-bg-container">
          {isGameOver ? (
            <div className="game-over-card">
              <div className="trophy-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                  alt="trophy"
                  className="trophy-image"
                />
              </div>
              <p className="your-score-heading"> YOUR SCORE </p>
              <p className="score-result"> {score} </p>
              <div className="play-again-btn-card">
                <button
                  className="play-again-btn"
                  onClick={this.onClickPlayAgain}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                    alt="reset"
                    className="reset-logo"
                  />
                  PLAY AGAIN
                </button>
              </div>
            </div>
          ) : (
            <div className="game-card">
              <div className="main-image-card">
                <img src={activeImageUrl} className="main-image" alt="match" />
              </div>
              <ul className="tabs-card">
                {tabsList.map(eachTab => (
                  <TabItem
                    key={eachTab.tabId}
                    tabDetails={eachTab}
                    isActive={activeTabId === eachTab.tabId}
                    clickTabItem={this.clickTabItem}
                  />
                ))}
              </ul>
              <ul className="thumbnail-images-card">
                {activeThumbnailImagesList.map(eachThumbnail => (
                  <ThumbnailImage
                    key={eachThumbnail.id}
                    thumbnailDetails={eachThumbnail}
                    clickThumbnail={this.clickThumbnail}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
