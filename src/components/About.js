import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    background: "white",
  });
  const [constbtntext, setBtntext] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        background: "black",
        border: "1px solid white",
      });
      setBtntext("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        background: "white",
      });
      setBtntext("Enable Dark Mode");
    }
  };

  return (
    <div className="Container" style={myStyle}>
      <h1 className="Container my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> 🔠 Text Analysis</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>Instantly analyze</code> your text for <code>word</code> and{" "}
              <code>character count</code>.<br />
              <code>Improve readability</code> and track content length.
              <br />
              Perfect for <code>writers</code>, <code>students</code>, and{" "}
              <code>professionals</code>.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>✨ Text Conversion</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Convert text to <code>UPPERCASE</code>, <code>lowercase</code>, or{" "}
              <code>Title Case</code>.<br />
              <code>Remove extra spaces</code> and clean your text effortlessly.
              <br />
              Simple tools to <code>format your content</code> with one click.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>🌙 Dark Mode & Responsive Design</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <code>Toggle between light and dark themes</code> for better
              comfort.
              <br />
              <code>Optimized for all screen sizes</code>—desktop, tablet, or
              mobile.
              <br />
              Enjoy a <code>sleek and modern UI</code> that adapts to your
              style.
            </div>
          </div>
        </div>
      </div>
      <div className="Container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {constbtntext}
        </button>
      </div>
    </div>
  );
}
