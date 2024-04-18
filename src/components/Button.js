import React from "react";
import '../styles/jinabase.css';

function Button({ label, onClick }) {
    return (
      <button className="my-button" onClick={onClick}>
        {label}
      </button>
    );
  }
  
  export default Button; 
  