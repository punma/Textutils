import React, { useState } from 'react'

export default function Form(props) {
  const [text, setText] = useState(""); //Enter your text

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to uppercase!",'success')
}
  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert("Converted to lowercase!",'success')
}

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("copied!",'success')
}
  const handleOnChange = (event) => {
    //  console.log("On change");
     setText(event.target.value);
     
}
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} id="mybox" style={{backgroundColor: props.mode==='dark'?'#13748f':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows={8}></textarea>
    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-success m-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
  </div>
  <div className="mb-3">
    <h2>Summary</h2>
    <p>word {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and char {text.length}</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something"}</p>
  </div>
  </div>    
  )
}
