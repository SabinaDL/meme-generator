import { useContext } from 'react';
import TextSettings from "./TextSettings";
import { MemeContext } from './MemeContext';
import * as htmlToImage from 'html-to-image';


const Toolbar = (props) => {

    const {meImage} = useContext(MemeContext);
    const [setMeImageValue] = meImage;


    //get the uploaded image file from user
    const uploadImage = e => {
        const url = URL.createObjectURL(e.target.files[0]);
        setMeImageValue(url);
        getImageDimensions(url);
    }
    const getImageDimensions = url => new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
            resolve({
                height: img.height,
                width: img.width
            })
            console.log(img.width+' x '+img.height);
        }
        
        img.src = url
    })


    //generate the Meme from html
    const generateMeme = () => {
        htmlToImage.toPng(document.getElementById('meImage'))
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-meme.png'
                link.href = dataUrl
                link.click()
            });
    }

    return (
        <div className="toolbar">
            <label className="upload">
                <input type="file" onChange={uploadImage} id="uploadImage" className="input-hidden" name="hidden-file" accept="image/gif, image/jpeg, image/png" />
                <span style={buttonStyle} className="btn btn-outline-secondary btn-sm buttonStyle">Select Image</span>
            </label>

            <TextSettings className="top-text" position="top"/>

            <TextSettings className="bottom-text" position="bottom"/>
            
            <button className="btn btn-primary btn-sm" onClick={generateMeme}>Generate Meme</button>
        
        </div>
    )
}

const buttonStyle = {
    width: '100%'
}

export default Toolbar