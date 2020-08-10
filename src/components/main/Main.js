import React from "react";
import Map from "../map/Map";
import List from "../list/List";

const Main = () => {
  return (
    <div className="main">
      <h1 className="title">
        WORLD M<span className="title-sub">APP</span>
      </h1>
      <Map />
      <List />
    </div>
  );
};

export default Main;
