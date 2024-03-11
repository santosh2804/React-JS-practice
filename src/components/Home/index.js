// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const {teams} = jsonData
    const formattedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-page-bg-container">
        <div className="ipl-logo-heading-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading"> IPL Dashboard </h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="white" height={50} width={50} />
          </div>
        ) : (
          <ul className="ipl-teams-list-container">
            {teamsList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamData={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
