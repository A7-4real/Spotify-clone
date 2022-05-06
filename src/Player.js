import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar Component*/}
        <Sidebar />

        {/* Body Component*/}
        <Body />
      </div>

      {/* Footer Component*/}
      <Footer />
    </div>
  );
}

export default Player;
