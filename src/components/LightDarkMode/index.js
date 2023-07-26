// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    let styleName
    let buttonName
    if (isDarkMode === true) {
      styleName = 'DarkModeStyle'
      buttonName = 'Light Mode'
    } else {
      styleName = 'LightModeStyle'
      buttonName = 'Dark Mode'
    }
    return (
      <div className="bg-container">
        <div className={`card ${styleName}`}>
          <h1>Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonName}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
