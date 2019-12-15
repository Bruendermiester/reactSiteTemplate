import React from 'react';
import Header from '../../Header/Header'
import BlogForm from '../../Form/BlogForm';
import './BlogCreateDisplay.css';


class BlogCreateDisplay extends React.Component {
  render() {
      return (
          <div> 
            <Header />
            <div id="create_display">
              <BlogForm/>
            </div>
          </div>
      )}
}

export default BlogCreateDisplay;