import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(sp => ({
        speed: sp.speed + 10,
      }))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(sp => ({speed: sp.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speed-img"
          alt="speedometer-img"
        />
        <h2 className="speed">Speed is {speed}mph</h2>
        <p className="desc">Min Limit 0mph, Max Limit 200mph</p>
        <div>
          <button
            className="button accelerate"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="button break" type="button" onClick={this.onBreak}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
