import './index.css'

const EmojiCard = props => {
  const {id, emojiName, emojiUrl, onEmojiClick} = props

  const onClickingEmoji = () => {
    setTimeout(() => {
      onEmojiClick(id)
    }, 500)
  }
  return (
    <li>
      <button
        onClick={onClickingEmoji}
        className="image-card-button1"
        type="button"
      >
        <img className="emoji-image1" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
