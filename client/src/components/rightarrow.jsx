import React from 'react';

class Rightarrow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.index,
      photos: this.props.photos
    }

    this.handlesClickingRightArrow = this.handlesClickingRightArrow.bind(this);
  }

  handlesClickingRightArrow() {
    let { currentIndex, photos } = this.state;
    let lastIndex = photos.length - 1;
    let shouldResetIndex = currentIndex === lastIndex;
    let index = shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });

    this.props.handlesRightArrowClick(index);
  }

  render() {
    return (
      <img
        glyph="#9664"
        onClick={this.handlesClickingRightArrow}
      ></img>
    )
  }

}

export default Rightarrow;