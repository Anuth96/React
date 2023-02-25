import React from "react";

export default function Form() {
  function handleClick() {
    console.log('I was clicked');
  }

  return(
    <main>
      <div className="form">
          <input type="text" placeholder="Top text" className="form--input"/>
          <input type="text" placeholder="Bottom text" className="form--input"/>
          <button onClick={handleClick} className="form--button"> Get a new meme image 🖼 </button>
      </div>
    </main>
  )
}
