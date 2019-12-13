import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}:</label>
      <div>
        <input {...input} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

const renderTextAreaField = ({ input, label, type, meta: { touched, error } }) => {
  
    let getWordCount = (text) => {
      if(text && text.length > 0) {
        let enteredText = text;
        let numberOfLineBreaks = (text.match(/\n/g)||[]).length;
        let wordCount = enteredText.trim().split(' ').length + numberOfLineBreaks;
        return wordCount;
      }
    }  


    return (
      <div>
        <label>{label}</label>
        <div>
          <textarea {...input} type={type} />
          {touched && error && <span>{error}</span>}
          <div className="info_container">
            <div className="word_count"> Word Count: <span className="word_count_span"> {getWordCount(input.value)}</span></div>
            <div className="character_count"> CC: <span className="character_count_span"> {input.value.length}</span></div>
          </div>
        </div>
      </div>
    );
  }

const renderTexts = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div>
      {fields.map((texts, index) => (
        <div key={index}>

          <h4>Text #{index + 1}           
            <button
                className="exit"
                type="button"
                title="Remove Text"
                onClick={() => fields.remove(index)}
            >X</button>
          </h4>
          <Field
            name={`${texts}.text`}
            type="text"
            component={renderTextAreaField}
          />
        </div>
      ))}
      <div className="action_container">
        <button className="add_text" type="button" onClick={() => fields.push({})}>Add Text Field</button>
        {(touched || submitFailed) && error && <span>{error}</span>}
        <button className="add_image" type="button" >Add Image Field</button>
        {(touched || submitFailed) && error && <span>{error}</span>}        
      </div>
    </div>
  );

  const FieldArraysForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
            name="title"
            type="text"
            component={renderField}
            label="Title"
            />
            <FieldArray name="texts" component={renderTexts} />
            <div>
              <button type="submit" disabled={submitting}>Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                  Clear All Values
              </button>
            </div>
        </form>
    );
  };
  const mapStateToProps = (state) => {
    console.log(state)
    return { articles: state.articles };
  }

  
  export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
    validate,
  })(FieldArraysForm);
  