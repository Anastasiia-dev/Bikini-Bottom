import React from "react";
import "./Button.css";

function Button() {
  return (
    <div className="buttons-main">
      <button className="btn-learn-more" href="#">
        LEARN MORE
      </button>
      <button className="btn-youtube" href="#">
        WATCH
      </button>
    </div>
  );
}

export default Button;
