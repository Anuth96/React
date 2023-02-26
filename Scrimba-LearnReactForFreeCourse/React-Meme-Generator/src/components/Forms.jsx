import React from "react";
import memesdata from "../memesdata";

export default function Form() {

  const [memeImage, setMemeImage] = React.useState({
    randomImage : "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: ""}
    )

    const [allMemeImages, setAllmemeImages] = React.useState(memesdata)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    console.log(memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(prevMeme => ({
       ...prevMeme,
       randomImage: url
    }))
  }


  return(
    <main>
      <div className="form">
          <input type="text" placeholder="Top text" className="form--input"/>
          <input type="text" placeholder="Bottom text" className="form--input"/>
          <button onClick={getMemeImage} className="form--button"> Get a new meme image 🖼 </button>
      </div>
      <div className="meme--image">
        <img src={memeImage.randomImage} alt="Meme-Image"/>
      </div>
    </main>
  )
}
