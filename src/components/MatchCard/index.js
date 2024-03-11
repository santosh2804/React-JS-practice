import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {id, competingTeamLogo, competingTeam, result, matchStatus} = matchData
  const customResultColor = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-competing-team-logo"
      />
      <p className="competing-team"> {competingTeam} </p>
      <p className="result"> {result} </p>
      <p className={`${customResultColor} match-status`}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
