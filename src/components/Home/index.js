// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = props => {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page-card">
        <div className="content-card">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <p className="description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <div className="shop-now-btn-card">
            <button type="button" className="shop-now-btn">
              {' '}
              Shop Now{' '}
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes-that-get-you-noticed"
          className="clothes-img"
        />
      </div>
    </div>
  )
}

export default Home
