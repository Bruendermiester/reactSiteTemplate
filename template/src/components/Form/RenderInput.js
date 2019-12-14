import React from 'react';
import { connect } from 'react-redux';
import { updateBlogTitle } from '../../actions';

class RenderInput extends React.Component {
  render() {
    return(
      <div className="default_shading">
        <label>Title: </label>
        <div>
          <input onChange={(e) => this.props.updateBlogTitle(e.target.value)} type='text'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { title: state.title };
}

RenderInput = connect(mapStateToProps, {updateBlogTitle})(RenderInput)
export default RenderInput;