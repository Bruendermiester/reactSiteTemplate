import React from 'react';
import Header from '../../Header/Header'
import BlogForm from './BlogForm';
import './BlogCreateDisplay.css';


class BlogCreateDisplay extends React.Component {
  render() {
      return (
          <div> 
            <Header />
            <div id="create_display">
              <BlogForm onSubmit/>
            </div>
          </div>
      )}
}

export default BlogCreateDisplay;