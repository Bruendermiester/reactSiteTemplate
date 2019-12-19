import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class DisplayText extends React.Component{

  render() {
        return (
            <div className="text_box">
                { ReactHtmlParser (this.props.content.text) }
            </div>
        )
    }
}

export default DisplayText;