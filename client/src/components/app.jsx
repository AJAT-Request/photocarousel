import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentView: 0,
      mainPhoto: null,
      photos: []
    }
    
    this.handlePictureClick = this.handlePictureClick.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.slice(7);
    console.log(id)
    $.ajax({
      url: `./photos`,
      method: 'GET',
      success: (roomData) => {
        console.log("a successful get request",roomData)
        this.setState({
          mainPhoto: roomData.photos[0].url,
          photos: roomData.photos
        })
      },
      fail: (err) => {
        console.log('there was an error', err)
      }
    })
  }

  handlePictureClick() {
    this.setState({
      currentView : currentView + 1
    })
  }

  render() {
    if (this.state.currentView === 0) {
      return (
        <div>
          <img src={this.state.mainPhoto} onClick={handlePictureClick}></img>
        </div>
      )
    } else if (this.state.currentView === 1) {
      return (
        <Photocarousel photos={this.state.photos}/>
      )
    }
  }
}

export default App;