// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-card">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="ipl-team-image" />
        <p className="team-name"> {name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
