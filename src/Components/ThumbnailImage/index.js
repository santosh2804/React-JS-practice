import './index.css'

const ThumbnailImage = props => {
  const {thumbnailDetails, clickThumbnail} = props
  const {id, thumbnailUrl, imageUrl} = thumbnailDetails
  const onClickThumbnail = () => {
    clickThumbnail(imageUrl)
  }

  return (
    <li className="thumbnail-card">
      <button className="thumbnail-btn">
        <img
          src={thumbnailUrl}
          onClick={onClickThumbnail}
          className="thumbnail-image"
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailImage
