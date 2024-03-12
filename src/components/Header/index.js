// Write your JS code here
import './index.css'

const Header = props => {
  return (
    <navbar className="navbar-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="navbar-logo"
      />
      <ul className="navbar-options-card">
        <li className="option-card">
          <p className="home-option"> Home </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home"
            className="navbar-option-logo"
          />
        </li>
        <li className="option-card">
          <p className="products-option"> Products </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navbar-option-logo"
          />
        </li>
        <li className="option-card">
          <p className="cart-option"> Cart </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="cart"
            className="navbar-option-logo"
          />
        </li>
        <div className="logout-btn-card">
          <button type="button" className="logout-btn">
            {' '}
            Logout{' '}
          </button>
        </div>
      </ul>
    </navbar>
  )
}

export default Header
