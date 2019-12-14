import React from 'react'
import { connect } from 'react-redux';

class renderImageField  extends React.Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          document.getElementById(this.props.input.name).src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
  }

  render(){
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div>
        <img id={input.name}></img>
        <div>
            <input
                type='file'
                accept='.jpg, .png, .jpeg'
                onChange={this.onChange}
        />
        </div>
     </div>
    )
    }
}

export default renderImageField;