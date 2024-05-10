// Write your code here
import {Component} from 'react'
import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headImageUrl, heads: 0, tails: 0}

  onClickBtn = () => {
    const {heads, tails} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImageUrl = ''
    let headsCount = heads
    let tailsCount = tails

    if (toss === 0) {
      tossImageUrl = headImageUrl
      headsCount += 1
    } else {
      tossImageUrl = tailImageUrl
      tailsCount += 1
    }

    this.setState({
      tossResultImage: tossImageUrl,
      heads: headsCount,
      tails: tailsCount,
    })
  }

  render() {
    const {tossResultImage, heads, tails} = this.state

    return (
      <div className="app-container">
        <div className="coin-toss-game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss">Heads (or) Tails</p>
          <img className="toss-image" src={tossResultImage} alt="toss result" />
          <button className="toss-btn" type="button" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="toss-counts-container">
            <p className="count">Total:{heads + tails}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
