import React, { Component } from 'react'

//Components
import TweetInput from './TweetInput'
import TweetFeed from './TweetFeed'

class Container extends Component {
  render() {
    return (

      <div className="feedContainer">
        <TweetInput />
        <TweetFeed />
      </div>
    )
  }
}

export default Container
