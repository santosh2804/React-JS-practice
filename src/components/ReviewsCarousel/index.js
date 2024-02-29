// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickBefore = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickNext = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewsListLength = reviewsList.length
    if (index < reviewsListLength - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const selectedReview = reviewsList[index]
    console.log(index)

    return (
      <div className="container">
        <h1 className="heading"> Reviews </h1>
        <div className="carousel-container">
          <div>
            <button className="arrow-btn" onClick={this.onClickBefore} data-testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-img"
              />
            </button>
          </div>
          <div className="user-card">
            <img
              src={selectedReview.imgUrl}
              alt={selectedReview.username}
              className="user-img"
            />
            <p className="user-name"> {selectedReview.username} </p>
          </div>
          <div>
            <button className="arrow-btn" onClick={this.onClickNext} data-testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-img"
              />
            </button>
          </div>
        </div>
        <p className="company-name"> {selectedReview.companyName} </p>
        <p className="review"> {selectedReview.description} </p>
      </div>
    )
  }
}

export default ReviewsCarousel
