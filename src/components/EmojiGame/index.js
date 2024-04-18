import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameOver: false,
    clickedIds: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {clickedIds, score, topScore} = this.state
    const isTopScore = score >= topScore
    if (clickedIds.includes(id)) {
      this.setState({isGameOver: true})
    } else {
      this.setState(prevState => ({
        clickedIds: [...prevState.clickedIds, id],
        score: prevState.score + 1,
        topScore: isTopScore ? prevState.topScore + 1 : prevState.topScore,
        isGameOver: score === 11,
      }))
    }
  }

  onPlayAgain = () => {
    this.setState({score: 0, isGameOver: false, clickedIds: []})
  }

  render() {
    const {score, topScore, isGameOver} = this.state
    console.log(isGameOver)
    const refreshedEmojisList = this.shuffledEmojisList()
    return (
      <div className="bg-container1">
        <NavBar score={score} topScore={topScore} />
        <div className="bg-container2">
          {isGameOver ? (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            <ul className="emojis-card-container1">
              {refreshedEmojisList.map(item => (
                <EmojiCard
                  key={item.id}
                  emojiUrl={item.emojiUrl}
                  emojiName={item.emojiName}
                  id={item.id}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
