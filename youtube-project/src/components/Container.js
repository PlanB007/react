import React, { Component } from 'react'

//Components
import TweetInput from './TweetInput'

class Container extends Component {
  render() {
    return (

      <div className="feedContainer">
        <TweetInput />
        
      </div>
    )
  }
}

export default Container
