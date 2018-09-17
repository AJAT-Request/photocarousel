import React from 'react';

class Photocarouselmainphoto extends React.Component {
  constructor(props) {
    super(props);

    this.handleverifiedPhotos = this.handleverifiedPhotos.bind(this);
  }
  
  handleverifiedPhotos() {
    if (this.props.mainphoto.isverified) {
      return 'Verified Photo';
    } else {
      return null;
    }
  }

  render() {
    const {mainphoto} = this.props;
    console.log(typeof mainphoto.isverified)
    return (
      <div>
        <img src={mainphoto.url} />
        <div>{mainphoto.description}</div>
        <div>{this.handleverifiedPhotos()}</div>
      </div>
    )
  }
}

export default Photocarouselmainphoto;