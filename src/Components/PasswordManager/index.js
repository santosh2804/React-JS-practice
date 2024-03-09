import {v4 as newId} from 'uuid'
import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    userPasswordsList: [],
    searchInput: '',
    passwordsCount: 0,
    isPasswordShown: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickAddNewEntry = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const isValidDetailsProvided =
      websiteInput !== '' && usernameInput !== '' && passwordInput !== ''
    if (isValidDetailsProvided) {
      const newEntry = {
        id: newId(),
        websiteInput,
        usernameInput,
        passwordInput,
      }

      this.setState(prevState => ({
        userPasswordsList: [...prevState.userPasswordsList, newEntry],
        websiteInput: '',
        usernameInput: '',
        passwordInput: '',
        passwordsCount: prevState.passwordsCount + 1,
      }))
    }
  }

  onDeletePassword = id => {
    const {userPasswordsList} = this.state
    const filteredList = userPasswordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState(prevState => ({
      userPasswordsList: filteredList,
      passwordsCount: prevState.passwordsCount - 1,
    }))
  }

  toggleShowPasswords = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      userPasswordsList,
      isPasswordShown,
      passwordsCount,
    } = this.state

    const searchResults = userPasswordsList.filter(eachPassword =>
      eachPassword.websiteInput
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    const isvalidList = searchResults.length > 0

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="passwords-input-container">
          <form className="add-new-password-card">
            <h1 className="add-password-heading"> Add New Password </h1>
            <div className="website-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <input
                type="text"
                value={websiteInput}
                className="website-input"
                onChange={this.onChangeWebsiteInput}
                placeholder="Enter Website"
              />
            </div>
            <div className="username-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username-logo"
              />
              <input
                type="text"
                value={usernameInput}
                className="username-input"
                onChange={this.onChangeUsernameInput}
                placeholder="Enter Username"
              />
            </div>
            <div className="password-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="password-logo"
              />
              <input
                type="password"
                value={passwordInput}
                className="password-input"
                onChange={this.onChangePasswordInput}
                placeholder="Enter Password"
              />
            </div>
            <div className="add-btn-card">
              <button
                className="add-btn"
                type="submit"
                onClick={this.onClickAddNewEntry}
              >
                {' '}
                Add{' '}
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="your-passwords-container">
          <div className="your-passwords-top-card">
            <div className="passwords-count-card">
              <h1 className="your-passwords-heading"> Your Passwords </h1>
              <p className="passwords-count"> {passwordsCount} </p>
            </div>
            <div className="password-search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="search-input"
                value={searchInput}
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <hr />
          <div className="show-passwords-card">
            <div className="checkbox-card">
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox-input"
                onClick={this.toggleShowPasswords}
              />
              <label htmlFor="checkbox" className="show-passwords-heading">
                {' '}
                Show Passwords{' '}
              </label>
            </div>
          </div>
          {isvalidList ? (
            <ul className="password-info-container">
              {searchResults.map(eachPassword => (
                <PasswordItem
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  onDeletePassword={this.onDeletePassword}
                  isPasswordShown={isPasswordShown}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-heading"> No Passwords </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
