import image from '../images/memeimg.png';

import { useEffect, useState } from 'react';

function Form() {
    const [allMemes, setMemes] = useState([])
    const [meme, setMeme] = useState({topText:'', bottomText:'', image:image})

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => data)
        .then(memes => setMemes(memes.data.memes))
        
    }, [])
    
    const generateMeme = () => {
        const memes = allMemes;
        let keys = Object.keys(memes)
        let randNum = keys[keys.length * Math.random() | 0];

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                image: memes[randNum].url
            }
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }


    return (
        <div className="pt-12 p-4">
            <div className="flex flex-nowrap space-x-10 pb-8">
                <input type="text" placeholder="Enter Top Text" 
                className="border-2 border-gray-300 p-2 rounded-md w-1/2" name="topText" 
                value={meme.topText} onChange={handleChange} />
                <input type="text" placeholder="Enter Bottom Text" 
                className="border-2 border-gray-300 p-2 rounded-md w-1/2" name="bottomText"
                value={meme.bottomText} onChange={handleChange} />
            </div>
            <button 
            className="p-4 rounded-md bg-gradient-to-r from-purple-900 to-purple-600 w-full text-white font-semibold text-xl"
            onClick={generateMeme}
            >
                Get a new meme image
                </button>

        <div className="relative pt-8 flex justify-center items-center">
            <img src={meme.image} alt='meme' className="object-contain max-w-full" />
            <h2 className="absolute text-4xl text-white max-w-80 text-center inset-x-0 top-10">{meme.topText}</h2>
            <h2 className="absolute text-4xl text-white max-w-80 text-center inset-x-0 bottom-10">{meme.bottomText}</h2>
        </div>
        </div>
    )
}

export default Form;