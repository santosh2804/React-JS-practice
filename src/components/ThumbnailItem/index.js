// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeActivethumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const changeThumbnail = () => {
    changeActivethumbnail(id)
  }

  const activethumbnailClassName = isActive ? 'active-thumbnail' : 'thumbnail'

  return (
    <li>
      <button
        type="submit"
        className={`${activethumbnailClassName} thumbnail-item`}
        onClick={changeThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
