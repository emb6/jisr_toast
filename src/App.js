import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const JisrToast = ({ text }) => (
    <div className="custom_toast">
      <h5 className="toast_title">{text}</h5>
      <p className="toast_subtitle">
        Long details go here after the title, long details go here after the
        title{" "}
      </p>
      <button
        className="ct_btn ct_btn1"
        onClick={() => console.log("Welcome to JISR")}
      >
        Console
      </button>
      <button className="ct_btn ct_btn2" onClick={() => toast.dismiss()}>
        Close
      </button>
    </div>
  );
  const customToast = () => {
    toast(<JisrToast text="Toast Title" />);
  };
  return (
    <>
      <>
        <div className="App">
          <div className="box">
            <div className="content">
              <h1>Toast</h1>
              <p>
                Notification message or a piece of information displayed above
                the page content.
              </p>
            </div>
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="64"
                fill="none"
              >
                <rect
                  width="63.8"
                  height="63.8"
                  x=".599"
                  y=".1"
                  fill="#fff"
                  rx="7.9"
                />
                <path
                  fill="#2970FF"
                  d="M30.589 14v16.503c0 7.498-4.924 7.442-5.952 7.43h-.091a7.18 7.18 0 0 1-1.015-.07L22.499 48.76c.87.104 1.746.156 2.622.155 7.801 0 16.9-4.006 16.9-16.799V14H30.588Z"
                />
                <rect
                  width="63.8"
                  height="63.8"
                  x=".599"
                  y=".1"
                  stroke="#2970FF"
                  stroke-width=".2"
                  rx="7.9"
                />
              </svg>
            </div>
          </div>
          <button onClick={customToast} className="jisr_btn">
            Notify me!
          </button>
          <ToastContainer />
        </div>
      </>
    </>
  );
}

export default App;
