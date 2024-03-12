// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isCredentialsMatched: true,
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.perventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      this.setState({isCredentialsMatched: true})
      this.onSubmitSuccess()
    } else {
      this.setState({isCredentialsMatched: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderLoginForm = () => {
    const {username, password, isCredentialsMatched} = this.state
    return (
      <form className="login-card" onSubmit={this.submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="username-input-card">
          <label htmlFor="usernameInput" className="username-heading">
            {' '}
            USERNAME{' '}
          </label>
          <input
            id="usernameInput"
            type="text"
            value={username}
            onChange={this.onChangeUsername}
            className="username-input"
            placeholder="Username"
          />
        </div>
        <div className="password-input-card">
          <label htmlFor="passwordInput" className="password-heading">
            {' '}
            PASSWORD{' '}
          </label>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={this.onChangePassword}
            className="password-input"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-btn">
          {' '}
          Login{' '}
        </button>
        {!isCredentialsMatched && (
          <p className="error-msg"> Username and Password did'nt match </p>
        )}
      </form>
    )
  }

  render() {
    return (
      <div className="login-page-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        {this.renderLoginForm()}
      </div>
    )
  }
}

export default LoginForm
