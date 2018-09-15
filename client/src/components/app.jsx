import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPage: 0,
      mainPhoto: null,
      photos: []
    }
  }

  componentDidMount() {
    // const id = window.location.pathname.slice(7);
    // console.log(id)
    $.ajax({
      url: `http://localhost:8080/rooms/02`,
      method: 'GET',
      success: (roomData) => {
        console.log(roomData.id)
        console.log(roomData.photos)
        console.log(roomData.name)
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

  render() {
    return (
      <div>
        <img src={this.state.mainPhoto}></img>
      </div>
    )
  }
}

export default App;