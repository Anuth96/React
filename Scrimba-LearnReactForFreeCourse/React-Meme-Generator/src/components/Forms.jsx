import React from "react";
import memesdata from "../memesdata";

export default function Form() {

  const [memeImage, setMemeimage] = React.useState("HELLO")

  function getMemeImage() {
    const memesArray = memesdata.data.memes
    console.log(memesArray);
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeimage(memesArray[randomNumber].url)
  }


  return(
    <main>
      <div className="form">
          <input type="text" placeholder="Top text" className="form--input"/>
          <input type="text" placeholder="Bottom text" className="form--input"/>
          <button onClick={getMemeImage} className="form--button"> Get a new meme image 🖼 </button>
      </div>
      <div className="meme--image">
        <img src={memeImage} alt="Meme-Image"/>
      </div>
    </main>
  )
}
