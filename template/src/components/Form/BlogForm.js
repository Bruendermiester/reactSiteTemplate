import React from 'react';
import { connect } from 'react-redux';
import RenderFormBody from './RenderFormBody';
import RenderInput from './RenderInput'
  
class BlogForm extends React.Component {

  render() {
    this.handleSubmit = () => {
      //console.log("You tried to submit")
    }
    this.clearForm = () => {
      //console.log("You tried to clear the form")
    }    
    return (
        <form onSubmit={this.handleSubmit()}>
            <RenderInput />
            <RenderFormBody />
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={this.clearForm()}>
                  Clear All Values
              </button>
            </div>
        </form>
      )
  };
}

const mapStateToProps = (state) => {
  return { state: state };
}

BlogForm = connect(mapStateToProps)(BlogForm)

export default BlogForm