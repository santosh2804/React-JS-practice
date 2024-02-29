import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  toggleIsLiked = id => {
    console.log('Clicked')
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredCommentsList})
  }

  onAddComment = event => {
    event.preventDefault()
    const randomColor = Math.floor(Math.random() * 7)
    const backgroundColor = initialContainerBackgroundClassNames[randomColor]
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: uuidv4(),
      nameInput,
      commentInput,
      className: backgroundColor,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state
    const commentsCount = commentsList.length
    console.log(commentsList)
    return (
      <div className="bg-container">
        <div className="top-container">
          <form className="user-interface-card">
            <h1 className="main-heading"> Comments </h1>
            <p className="caption"> Say something about 4.0 Technologies. </p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              onChange={this.onChangeNameInput}
              value={nameInput}
            />
            <br />
            <textarea
              name="user_comment"
              rows="8"
              cols="50"
              className="comment-input"
              placeholder="Your Comment"
              onChange={this.onChangeCommentInput}
              value={commentInput}
            ></textarea>
            <div>
              <button
                type="button"
                className="add-comment-btn"
                onClick={this.onAddComment}
              >
                {' '}
                Add Comment{' '}
              </button>
            </div>
          </form>
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr />
        <p className="comments-count">
          {' '}
          <span className="count"> {commentsCount} </span> Comments{' '}
        </p>
        <ul className="comments-card">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              onDeleteComment={this.onDeleteComment}
              toggleIsLiked={this.toggleIsLiked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
