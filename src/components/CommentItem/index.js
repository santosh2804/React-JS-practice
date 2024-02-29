// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment, toggleIsLiked} = props
  const {id, nameInput, commentInput, className, isLiked} = commentDetails
  const userInitial = nameInput[0].toUpperCase()
  const commentTime = formatDistanceToNow(new Date())

  const deleteComment = () => {
    onDeleteComment(id)
  }

  const onClickLikeIcon = () => {
    toggleIsLiked(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeClassname = isLiked ? 'liked-btn' : 'like-btn'
  return (
    <li className="comment-item">
      <div className="user-comment-card">
        <div>
          <p className={`user-initial ${className}`}> {userInitial} </p>
        </div>
        <div className="comment-info-card">
          <p className="user-name">
            {' '}
            {nameInput} <span className="comment-time"> {commentTime} </span>{' '}
          </p>
          <p className="comment"> {commentInput}. </p>
        </div>
      </div>
      <div className="like-delete-btns-card">
        <div className="like-btn-card">
          <button className={likeClassname} onClick={onClickLikeIcon}>
            <img src={likeImgUrl} alt="like" className="like-icon" />
            Like
          </button>
        </div>
        <div className="delete-btn-card">
          <button className="delete-btn" onClick={deleteComment} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
