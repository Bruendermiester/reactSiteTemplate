import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="default_shading">
      <label>{label}:</label>
      <div>
        <input {...input} type={type}/>
        <div className="error">{touched && error && <span>{error}</span>}</div>
      </div>
    </div>
);

const renderTextAreaField = ({ input, label, type, meta: { touched, error } }) => {
  
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
        <label>{label}</label>
        <div>
          <textarea {...input} type={type} />
          <div className="info_container">
            <div className="word_count"> WORDS: <span className="word_count_span"> {getWordCount(input.value)}</span></div>
            <div className="character_count"> CC: <span className="character_count_span"> {input.value.length}</span></div>
            <div className="error">{touched && error && <span>{error}</span>}</div>
          </div>
        </div>
      </div>
    );
  }

const renderTexts = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div>
      {fields.map((texts, index) => (
        <div className="default_shading" key={index}>

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
  
  export default reduxForm({
    form: 'fieldArrays', // a unique identifier for this form
    validate,
  })(FieldArraysForm);
  