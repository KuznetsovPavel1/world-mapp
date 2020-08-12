import React from "react";
import Map from "../map/Map";
import Menu from "../menu/Menu";
import Card from "../card/Card";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main-title">
        WORLD M<span className="main-subtitle">APP</span>
      </h1>
      <div className="main-body">
        <Menu />
        <div className="main-body__view">
          <Map />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Main;
