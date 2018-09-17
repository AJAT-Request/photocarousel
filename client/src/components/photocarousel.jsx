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
      currentIndex: 0,
      mainPhoto: this.props.photos[0],
      photos: this.props.photos
    }

    this.handlesMainPhotoClick = this.handlesMainPhotoClick.bind(this);
  }

  handlesMainPhotoClick(index) {
    console.log('im here this is the current index', index);
    this.setState({
      currentIndex: index,
      mainPhoto: this.state.photos[index]
    })
  }

  handlesRightButtonClick() {

  }

  render() {
    const {currentIndex, mainPhoto, photos} = this.state;
    return (
      <div>
        <Photocarouselmainphoto 
          index={currentIndex}
          mainphoto={mainPhoto} 
          photos={photos}
          handlesMainPhotoClick={this.handlesMainPhotoClick}
        />

        <Photocarouselslider 
          photos={photos} 
        />
      </div>
    )
  }
}

export default Photocarousel;