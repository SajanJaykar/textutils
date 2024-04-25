import React, { useState } from "react";

export default function TextField(props) {
  const [text, setText] = useState('');

  const handleUpperCaseClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to upper case","success");
  };

  const handleLowerCaseClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lower case","success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text here..."
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h3>Your text summery</h3>
        <p>Your text contain {text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
    </>
  );
}
