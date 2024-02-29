// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickTab = () => {
    onClickTab(tabId)
  }

  return (
    <li className={`tab-item ${isActive ? 'active' : ''}`}>
      <button className="tab-btn" onClick={clickTab}>
        {' '}
        {displayText}{' '}
      </button>
    </li>
  )
}

export default TabItem
