import React from "react";
import "./Header.css";

export default function header(props) {
  const { text, showBanner } = props;

  return (
    <div className="container">
      <h2>{text}</h2>
      <hr />
      {showBanner && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/distrib-faby.appspot.com/o/productos%2F1.jfif?alt=media&token=2ecb68b5-aab2-466d-aa93-2124171130aa"
          alt="banner"
          className="banner"
        />
      )}
    </div>
  );
}
