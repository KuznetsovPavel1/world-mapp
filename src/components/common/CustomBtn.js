import React from "react";
import PropTypes from "prop-types";

const CustomBtn = ({ name = "", onClick }) => {
  return (
    <button className="custom-btn" onClick={onClick}>
      <div className="custom-btn__icon">↩</div>
      {name && <span className="custom-btn__title">{name}</span>}
    </button>
  );
};

CustomBtn.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomBtn;
