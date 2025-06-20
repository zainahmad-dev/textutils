import React, { useState } from "react";

export default function Testform(props) {
  const handleupClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleclClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "successfully");
  };
  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("My Box");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copyed", "successfully");
  };

  const handleonChange = (Event) => {
    console.log("On change");
    setText(Event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="My Box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupClick}>
          Convert Into UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert Into LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary </h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above textbox to preview here "}
        </p>
      </div>
    </>
  );
}
