// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onClickStarIcon} = props
  const {id, titleInput, isStarred, dateInput} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const clickStarIcon = () => {
    onClickStarIcon(id)
  }
  const givenDate = new Date(dateInput)
  const formattedDate = format(new Date(givenDate), 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointment-item">
      <div>
        <p className="appointment"> {titleInput} </p>
        <p className="date-and-time"> Date: {formattedDate} </p>
      </div>
      <div className="favourite-icon-card">
        <button
          className="favourite-icon-btn"
          onClick={clickStarIcon}
          data-testid="star"
        >
          <img src={starImgUrl} alt="star" className="star-image" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
