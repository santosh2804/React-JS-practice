import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePassword, isPasswordShown} = props
  const {id, websiteInput, usernameInput, passwordInput} = passwordDetails
  const userInitial = usernameInput[0]

  const deletePassword = () => {
    onDeletePassword(id)
  }

  return (
    <li className="password-item">
      <div className="user-details-card">
        <p className="user-initial"> {userInitial} </p>
        <div className="password-info-card">
          <p className="website"> {websiteInput} </p>
          <p className="username"> {usernameInput} </p>
          {isPasswordShown ? (
            passwordInput
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="hashed-password"
            />
          )}
        </div>
      </div>
      <div className="delete-btn-card">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={deletePassword}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
