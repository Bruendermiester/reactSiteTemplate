import React from 'react'

class DisplayText extends React.Component{

  render() {
        let formatedBody = this.props.content.text.split ('\n').map((item, i) => <p key={i}>{item}</p>);
        return (
            <div className="text_box">
                { formatedBody }
            </div>
        )
    }
}

export default DisplayText;