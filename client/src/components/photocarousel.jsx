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
      mainPhoto: null,
      photoSlider: []
    }
  }

  // handlesMainPhotoChange() {
  //   this.setState({
  //     mainPhoto: 
  //   });
  // }

  render() {
    const {photos} = this.props;
    return (
      <div>
        <Photocarouselslider photos={photos}/>
      </div>
    )
  }
}

export default Photocarousel;