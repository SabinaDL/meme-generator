// component with the toolbar to change text settings in meme
import { useContext} from 'react';
import { MemeContext } from './MemeContext';

const TextSettings = (props) => {
    const {topText, bottomText} = useContext(MemeContext);
    const [setTopTextValue] = topText;
    const [setBottomTextValue] = bottomText;

    //if the user types the text in the input, update text on meme
    const handleInput = e => {
        if (props.position==='top') 
            setTopTextValue(e.target.value);
        else 
            setBottomTextValue(e.target.value);
    }
    // envent-handler for font styling (color, font-size, font-family, text-alignment)
    const handleFontStyle = (param) => e => {
        //check wich text-component should change (top or bottom)
        const textId = props.position==='top' ? 'meTopText' : 'meBottomText';
        //if text-style that should change is font-size, than add 'px' to the value, to set proper font-size styling
        document.getElementById(textId).style[param] = param==='fontSize' ? e.target.value+'px' : e.target.value ;
    }


    return (
        <div className={`${props.position}-text`}>
            <h6>Style {props.position} text</h6>            
            <div className="wrapper">                
                <input type="text" style={inputStyle} maxLength="50" onInput={handleInput} placeholder='enter text' />
                <input type="color" onInput={handleFontStyle('color')} className="color-top"  />
                <input type="number" onChange={handleFontStyle('fontSize')} defaultValue="20" />
            </div>
            
                <b>Text alignment</b>
                <input type="radio" onChange={handleFontStyle('textAlign')} name={`text_alignment_${props.position}`} value="left" /> 
                <label htmlFor="left">left</label>
                <input type="radio" onChange={handleFontStyle('textAlign')} name={`text_alignment_${props.position}`} value="center" /> 
                <label htmlFor="left">center</label>
                <input type="radio" onChange={handleFontStyle('textAlign')} name={`text_alignment_${props.position}`} value="right" /> 
                <label htmlFor="left">right</label>
            
            <div className="settings">              
                <select className="font-selector" onChange={handleFontStyle('fontFamily')}>
                    <option>Choose font</option>
                    <option value="Arial">Arial</option>
                    <option value="Comic Sans MS">Comic Sans</option>
                    <option value="Pacifico">Pacifico</option>
                </select>
            </div>
        </div>
    )
}

const inputStyle = {
    marginBottom: 10
}

export default TextSettings

