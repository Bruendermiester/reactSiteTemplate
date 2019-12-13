const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.texts || !values.texts.length) {
      errors.texts = { _error: 'At least one texts must be entered' };
    } else {
      const textsArrayErrors = [];
      values.texts.forEach((text, textsIndex) => {
        const textsErrors = {};
        if (!text || !text.text) {
            textsErrors.text = 'Required';
          textsArrayErrors[textsIndex] = textsErrors;
        }
      });
      if (textsArrayErrors.length) {
        errors.texts = textsArrayErrors;
      }
    }
    return errors;
  };
  
  export default validate;
  