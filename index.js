import './index.css'

const Button = props => {
  const {buttonText, className} = props 
  return (<button className=`button ${className}`> `${buttonText}` </button>)
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="-buttons-container">
      <Button className = "like-button" buttonText = "Like" />
      <Button className = "comment-button" buttonText = "Comment" />
      <Button className = "share-button" buttonText = "Share" />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
