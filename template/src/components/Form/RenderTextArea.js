import React from 'react';
import { connect } from 'react-redux';
import { updateBlogBodyContent } from '../../actions';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from "sanitize-html";

class RenderTextArea extends React.Component {


    render() {
        let newContent = Object.assign([], this.props.content);
        let textValue= '';
        if(newContent[this.props.index].text) {
            textValue = newContent[this.props.index].text;
        }
        let getWordCount = (text) => {
            if(text && text.length > 0) {
            let enteredText = text.replace(/\n/g, " ");
            let wordCount = enteredText.trim().split(' ').length;
            return wordCount;
            }
            else {
                return 0;
            }
        }
        let sanitizeConf = {
            allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "ul", "li"],
            allowedAttributes: { a: ["href"] }
        };        
        let sanitize = () => {
            newContent[this.props.index].text = sanitizeHtml(newContent[this.props.index].text, sanitizeConf)
            this.props.updateBlogBodyContent(newContent);
        };

        let handleChange = (e) => {
            newContent[this.props.index].text = e.target.value;
            this.props.updateBlogBodyContent(newContent);
        }

        return (
            <div>
                <ContentEditable
                    className="editable_textarea"
                    html={newContent[this.props.index].text} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={handleChange} // handle innerHTML change
                    onBlur={sanitize}
                />
                <div className="info_container">
                    <div className="word_count"> WORDS: <span className="word_count_span"> {getWordCount(newContent[this.props.index].text)}</span></div>
                    <div className="character_count"> CC: <span className="character_count_span"> {newContent[this.props.index].text ? newContent[this.props.index].text.length : 0}</span></div>
                    <EditButton cmd="italic" />
                    <EditButton cmd="bold" />
                    <EditButton cmd="formatBlock" arg="h1" name="heading" />
                    <EditButton cmd="insertUnorderedList" name="bullet"/>
                    <EditButton
                        className="action_btn"
                        cmd="createLink"
                        arg="https://github.com/lovasoa/react-contenteditable"
                        name="hyperlink"
                    />
                </div>
            </div>
        );
    }
}

function EditButton(props) {
    return (
      <button
        className="action_btn"
        key={props.cmd}
        onMouseDown={evt => {
          evt.preventDefault(); // Avoids loosing focus from the editable area
          document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}
      >
        {props.name || props.cmd}
      </button>
    );
  }

const mapStateToProps = (state) => {
    return { content: state.content };
  }
  
RenderTextArea = connect(mapStateToProps, {updateBlogBodyContent})(RenderTextArea)
export default RenderTextArea;