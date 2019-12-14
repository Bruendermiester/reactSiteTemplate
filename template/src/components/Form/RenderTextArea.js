import React from 'react';
import { connect } from 'react-redux';
import { updateBlogBodyContent } from '../../actions';

class RenderTextArea extends React.Component {

    render() {
        let newContent = Object.assign([], this.props.content);
        let textValue= '';
        if(newContent[this.props.index].text) {
            textValue = newContent[this.props.index].text;
        }
        console.log(this.props)
        let getWordCount = (text) => {
            if(text && text.length > 0) {
            let enteredText = text.replace(/\n/g, " ");
            let wordCount = enteredText.trim().split(' ').length;
            return wordCount;
            }
            else {
            return 0
            }
        }

        return (
            <div>
                <textarea type='text' value={textValue}  onChange={(e) => {
                    newContent[this.props.index].text = e.target.value;
                    this.props.updateBlogBodyContent(newContent);
                    }}/>
                <div className="info_container">
                    <div className="word_count"> WORDS: <span className="word_count_span"> {getWordCount(newContent[this.props.index].text)}</span></div>
                    <div className="character_count"> CC: <span className="character_count_span"> {newContent[this.props.index].text ? newContent[this.props.index].text.length : 0}</span></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { content: state.content };
  }
  
RenderTextArea = connect(mapStateToProps, {updateBlogBodyContent})(RenderTextArea)
export default RenderTextArea;