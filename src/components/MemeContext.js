//context for inserted texts and uploaded image, created to use in other components without passing props
import React, { useState, createContext } from 'react';
import meDefaultImage from '../images/cookime.png';


export const MemeContext = createContext();

// Provider, who provides the given information to the components
export const MemeProvider = props => {
    const [topText, setTopText] = useState('Enter Text here');
    const [bottomText, setBottomText] = useState('Second Text here');
    const [meImage, setMeImage] = useState(meDefaultImage);

    return (
        <MemeContext.Provider 
        value={{topText: [topText, setTopText], bottomText: [bottomText, setBottomText], meImage: [meImage, setMeImage]}}>
            {props.children}
        </MemeContext.Provider>
    );
};

