import React from 'react'

class DisplayImage extends React.Component{

  render() {

    let displaySrc = {
      backgroundImage: `url( ${this.props.content.src} )`
    }
    return (
     <div className="image_box">
        <div id={`image-${this.props.index}`} className="display_image" style={ displaySrc } ></div>
     </div>
    )
    }
}

export default DisplayImage;