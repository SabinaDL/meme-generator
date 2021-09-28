//component with the styled meme
import {useContext } from 'react';
import { MemeContext  } from './MemeContext';


const Stage = () => {
    // import context that we want to use (MemeContext)
    const {topText, bottomText, meImage} = useContext(MemeContext);
    const [topTextValue] = topText;
    const [bottomTextValue] = bottomText;
    const [meImageValue] = meImage;
    
    return (
        <div className="me-image" id="meImage">
            <img src={meImageValue} style={imageStyle} alt="meme" />
            <div className="me-text-top" id="meTopText">{topTextValue}</div>
            <div className="me-text-bottom" id="meBottomText">{bottomTextValue}</div>
        </div>
    )
}

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}

export default Stage