import React from 'react';
import Photocarouselslider from './photocarouselslider.jsx';
import Photocarouselmainphoto from './photocarouselmainphoto.jsx';
import Exitbutton from './exitbutton.jsx';
import Leftbutton from './leftbutton.jsx';
import Rightbutton from './rightbutton.jsx';


class Photocarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPhoto: this.props.photos[0],
      photos: this.props.photos
    }
  }

  // handlesMainPhotoChange() {
  //   this.setState({
  //     mainPhoto: 
  //   });
  // }

  render() {
    const {mainPhoto, photos} = this.state;
    return (
      <div>
        <Photocarouselmainphoto mainphoto={mainPhoto} />
        <Photocarouselslider photos={photos} />
      </div>
    )
  }
}

export default Photocarousel;