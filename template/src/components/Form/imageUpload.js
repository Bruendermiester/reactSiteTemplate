import React from 'react'
import { connect } from 'react-redux';
import { updateBlogBodyContent } from '../../actions';

class renderImageField  extends React.Component{

  render() {

    let newContent = Object.assign([], this.props.content); 
    let displaySrc = newContent[this.props.index].src || '';
    return(
     <div>
        <img id={`image-${this.props.index}`} src={displaySrc}></img>
        <div>
            <input
                type='file'
                accept='.jpg, .png, .jpeg'
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      let reader = new FileReader();
                      newContent[this.props.index].file = e.target.files[0];
                      reader.onload = (e) => {
                        document.getElementById(`image-${this.props.index}`).src = e.target.result;
                        newContent[this.props.index].src = e.target.result;
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