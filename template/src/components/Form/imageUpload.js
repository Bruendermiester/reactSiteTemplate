import React from 'react'
import { connect } from 'react-redux';
import { updateBlogBodyContent } from '../../actions';

class renderImageField  extends React.Component{

  render() {

    let newContent = Object.assign([], this.props.content); 
    let displaySrc = {
      backgroundImage: `url( ${newContent[this.props.index].src} )`
    }
    return(
     <div className="image_box">
        <div id={`image-${this.props.index}`} className="display_image" style={ displaySrc } ></div>
        <div className="image_size">Size {newContent[this.props.index].file ? ((newContent[this.props.index].file.size/(1024*1024)).toFixed(2)) : 0} - MB </div>
        <div className="box">
            <input
                type='file'
                className="upload_btn"
                accept='.jpg, .png, .jpeg'
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();
                      newContent[this.props.index].file = e.target.files[0];
                      reader.onload = () => {
                        displaySrc = {backgroundImage: `url( ${ reader.result } )`};
                        newContent[this.props.index].src = reader.result;
                        this.props.updateBlogBodyContent(newContent);
                      };
                      reader.readAsDataURL(e.target.files[0]);

                  }
                }}/>
        </div>
     </div>
    )
    }
}

const mapStateToProps = (state) => {
  return { content: state.content };
}

renderImageField = connect(mapStateToProps, {updateBlogBodyContent})(renderImageField)
export default renderImageField;