// Write your code here
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], titleInput: '', dateInput: '', isActive: false}

  onChangeTitleInput = event => {
    console.log(event.target.value)
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    console.log(event.target.value)
    this.setState({dateInput: event.target.value})
  }

  onAddAppointment = () => {
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onClickStarIcon = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onToggleStarredAppointment = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  filterStarredAppointments = appointmentsList => {
    if (appointmentsList.length > 0) {
      const filteredList = appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
      return filteredList
    }
    return null
  }

  render() {
    const {appointmentsList, titleInput, dateInput, isActive} = this.state
    const starredAppointmentsList =
      this.filterStarredAppointments(appointmentsList)
    return (
      <div className="bg-container">
        <div className="content-card">
          <div className="top-card">
            <form className="user-interface-card">
              <h1 className="main-heading"> Add Appointment </h1>
              <div className="title-input-card">
                <label htmlFor="titleInput" className="title">
                  {' '}
                  TITLE{' '}
                </label>
                <input
                  type="text"
                  id="titleInput"
                  className="title-input"
                  placeholder="Title"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                />
              </div>
              <div className="date-input-card">
                <label htmlFor="dateInput" className="date">
                  {' '}
                  DATE{' '}
                </label>
                <input
                  type="date"
                  id="dateInput"
                  className="date-input"
                  onChange={this.onChangeDateInput}
                  value={dateInput}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="add-btn"
                  onClick={this.onAddAppointment}
                >
                  Add
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-img"
              />
            </div>
          </div>
          <hr />
          <div className="starred-btn-card">
            <h1 className="sub-heading"> Appointments </h1>
            <div>
              <button
                className="starred-btn"
                type="button"
                onClick={this.onToggleStarredAppointment}
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="appointments-container">
            {isActive
              ? starredAppointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    key={eachAppointment.id}
                    appointmentDetails={eachAppointment}
                    onClickStarIcon={this.onClickStarIcon}
                  />
                ))
              : appointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    key={eachAppointment.id}
                    appointmentDetails={eachAppointment}
                    onClickStarIcon={this.onClickStarIcon}
                  />
                ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
