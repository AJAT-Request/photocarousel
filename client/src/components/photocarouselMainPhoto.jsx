import React from 'react';

class Photocarouselmainphoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.index,
      photos: this.props.photos
    }

    this.handlesClickingMainPhoto = this.handlesClickingMainPhoto.bind(this);
    this.handleverifiedPhotos = this.handleverifiedPhotos.bind(this);
  }
  
  handleverifiedPhotos() {
    if (this.props.mainphoto.isverified) {
      return 'Verified Photo';
    } else {
      return null;
    }
  }

  handlesClickingMainPhoto() {
    let { currentIndex, photos } = this.state;
    let lastIndex = photos.length - 1;
    let shouldResetIndex = currentIndex === lastIndex;
    let index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    })

    this.props.handlesMainPhotoClick(index);
  }

  render() {
    const {mainphoto} = this.props;
    return (
      <div>
        <img 
          src={mainphoto.url} 
          onClick={this.handlesClickingMainPhoto}
        />
        <div>{mainphoto.description}</div>
        <div>{this.handleverifiedPhotos()}</div>
      </div>
    )
  }
}

export default Photocarouselmainphoto;