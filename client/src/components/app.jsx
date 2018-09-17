import React from 'react';
import $ from 'jquery';
import Photocarousel from './photocarousel.jsx';

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
      currentView : this.state.currentView + 1
    })
  }

  render() {
    const {currentView, mainPhoto, photos} = this.state;
    if (currentView === 0) {
      return (
        <div>
          <img src={mainPhoto} onClick={this.handlePictureClick}></img>
        </div>
      )
    } else if (currentView === 1) {
      return (
        <Photocarousel photos={photos} />
      )
    }
  }
}

export default App;