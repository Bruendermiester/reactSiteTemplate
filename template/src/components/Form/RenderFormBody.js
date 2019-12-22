import React from 'react';
import { connect } from 'react-redux';
import RenderImageField from './imageUpload';
import RenderTextArea from './RenderTextArea';
import { updateBlogBodyContent } from '../../actions';

class RenderFormBody extends React.Component {

  
  render() {
    let newContent = Object.assign([], this.props.content);
    return (
      <div className="test">
        {newContent.map((content, index) => {
          return (
            <div className="default_shading" key={index}>

              <h4>{`Field Type: ${content.type}`}
                <button
                    className="exit"
                    type="button"
                    title="Remove Text"
                    onClick={() => {
                      newContent.splice(index, 1);
                      this.props.updateBlogBodyContent(newContent);
                    }}
                >X</button>
              </h4>
                {content.type === 'text' ? <RenderTextArea index={index}/> : <RenderImageField index={index}/>}
            </div>
          )
        })}
      <div className="action_container">
        <button className="add_text" type="button" onClick={() => {
            newContent.push({"type": 'text', "backgroundCover": {}});
            this.props.updateBlogBodyContent(newContent);
            }}>
          Add Text Field  
        </button>
        <button className="add_image" type="button" onClick={() => {
          newContent.push({"type": 'file'})
          this.props.updateBlogBodyContent(newContent);
          }}>
          Add Image Field
        </button>       
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { content: state.content };
}

RenderFormBody = connect(mapStateToProps, {updateBlogBodyContent})(RenderFormBody)

export default RenderFormBody;