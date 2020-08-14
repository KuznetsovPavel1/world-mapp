import React from "react";
import Map from "../map/Map";
import Menu from "../menu/Menu";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">
        World M<span className="main-subtitle">app</span>
      </h1>
      <div className="main-body">
        <Menu />
        <div className="main-body__view">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Main;
