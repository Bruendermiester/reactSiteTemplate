import React from 'react';
import { connect } from 'react-redux';
import { updateHeroImage } from '../../actions';

class RenderHeroImage extends React.Component {
    render() {
        let newHeroImage = Object.assign([], this.props.state.heroImage);
        let displaySrc = {
            backgroundImage: `url( ${newHeroImage.src} )`
        };
        return(
            <div className="default_shading"> 
                <div className="image_box">
                    <label>Hero Image: </label>
                    <div id={`hero-image`} className="display_image" style={ displaySrc } ></div>
                    <div className="image_size">Size {newHeroImage.file ? ((newHeroImage.file.size/(1024*1024)).toFixed(2)) : 0} - MB </div>
                    <div className="box">
                        <input
                            type='file'
                            className="upload_btn"
                            accept='.jpg, .png, .jpeg'
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let reader = new FileReader();
                                    newHeroImage.file = e.target.files[0];
                                    reader.onload = () => {
                                    displaySrc = {backgroundImage: `url( ${ reader.result } )`};
                                    newHeroImage.src = reader.result;
                                    this.props.updateHeroImage(newHeroImage);
                                    };
                                    reader.readAsDataURL(e.target.files[0]);
                                }
                            }}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return { state: state };
}

RenderHeroImage = connect(mapStateToProps, {updateHeroImage})(RenderHeroImage)
export default RenderHeroImage;