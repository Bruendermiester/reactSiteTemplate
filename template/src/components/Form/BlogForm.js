import React from 'react';
import { connect } from 'react-redux';
import RenderFormBody from './RenderFormBody';
import RenderInput from './RenderInput';
import RenderHeroImage from './RenderHeroImage';
import { Redirect } from 'react-router';
import { submitForm, updateBlogBodyContent, updateBlogTitle, updateHeroImage } from '../../actions';
  
class BlogForm extends React.Component {

  constructor() {
    super();
    if(window.location.pathname.includes("edit")) {
      this.id = window.location.pathname.split('/')[2] - 1;
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // TODO: this is fetch from database call
    var content = this.props.state.articles[this.id];
    if(content) {
      this.props.updateBlogTitle(content.title);
      this.props.updateHeroImage(content.heroImage);
      this.props.updateBlogBodyContent(content.content);
      this.props.updateBlogTitle(content.title);
    }

    
  }


  getRandomId = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  reset = () => {
    this.props.updateBlogBodyContent([]);
    this.props.updateBlogTitle('');
    this.props.updateHeroImage('');
    this.props.submitForm(true);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("You tried to submit", this.props, this.props.state);
    let article = {
      id: this.getRandomId(100000000000000),
      title: this.props.state.title,
      content: this.props.state.content,
      heroImage: this.props.state.heroImage,
      author: 'Jonathan Bruenderman',
      date: Date(Date.now())
    };
    // TODO: Check for Id and see if you are updating or adding a new one here
    this.props.state.articles.push(article);
    // Uncomment when ready to clear and navigate to home page
    // this.reset();
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <RenderInput />
            <RenderHeroImage />
            <RenderFormBody />
            {this.props.state.submitted ? <Redirect to='/'/> : ''}
            <div>
              <button className="submit_form" type="submit">Submit</button>
            </div>
        </form>
      )
  };
}

const mapStateToProps = (state) => {
  return { state: state };
}

BlogForm = connect(mapStateToProps, {submitForm, updateBlogBodyContent, updateBlogTitle, updateHeroImage })(BlogForm)
export default BlogForm;