// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamsBgColors = {
  RCB: 'dark-red',
  KKR: 'violet',
  KXP: 'red',
  CSK: 'yellow',
  RR: 'pink',
  MI: 'blue',
  SH: 'orange',
  DC: 'sky-blue',
}

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchData: {},
    recentMatchesData: [],
    isLoading: true,
    customClass: '',
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const customClass = teamsBgColors[id]
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()
    const {team_banner_url, latest_match_details, recent_matches} = jsonData
    const latestMatch = {
      id: latest_match_details.id,
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo,
      date: latest_match_details.date,
      firstInnings: latest_match_details.first_innings,
      manOfTheMatch: latest_match_details.man_of_the_match,
      matchStatus: latest_match_details.match_status,
      result: latest_match_details.result,
      secondInnings: latest_match_details.second_innings,
      umpires: latest_match_details.umpires,
      venue: latest_match_details.venue,
    }
    const recentMatches = recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      teamBannerUrl: team_banner_url,
      latestMatchData: latestMatch,
      recentMatchesData: recentMatches,
      customClass: customClass,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchData,
      recentMatchesData,
      customClass,
      isLoading,
    } = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchData
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="white" height={50} width={50} />
          </div>
        ) : (
          <div className={`${customClass} match-card-bg-container`}>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-match-heading"> Latest Match </h1>
            <div className="latest-match-card">
              <div className="date-venue-info-card">
                <p className="competing-team-name"> {competingTeam} </p>
                <p className="match-date"> {date} </p>
                <p className="match-venue">{venue}</p>
                <p className="match-result"> {result} </p>
              </div>
              <img
                src={competingTeamLogo}
                alt={`latest match ${competingTeam}`}
                className="competing-team-logo"
              />
              <div className="result-card">
                <p className="first-innings-heading latest-match-headings">
                  {' '}
                  First Innings{' '}
                </p>
                <p className="first-innings">{firstInnings}</p>
                <p className="second-innings-heading latest-match-headings">
                  {' '}
                  Second Innings{' '}
                </p>
                <p className="second-innings">{secondInnings}</p>
                <p className="man-of-the-match-heading latest-match-headings">
                  {' '}
                  Man Of The Match{' '}
                </p>
                <p className="man-of-the-match">{manOfTheMatch}</p>
                <p className="umpires-heading latest-match-headings">
                  {' '}
                  Umpires{' '}
                </p>
                <p className="umpires">{umpires}</p>
              </div>
            </div>
            <ul className="recent-matches-container">
              {recentMatchesData.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchData={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
