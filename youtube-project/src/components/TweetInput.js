import React, { Component} from 'react'

class TweetInput extends Component {
  state = {
    tweet: ""
  };

  onChange= (e) => {
    this.setState({
      tweet: e.target.value
    })
  }


  render() {
    return (
      <div className="tweetForm">
        <form onSubmit={this.handleTweetSubmit} className="form-container">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="input-text"
            value={this.state.tweet}
            onChange={this.onChange}
          />
          <input type="submit" className="input-submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default TweetInput
