import React, { useState } from "react";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAddressCard,
//   faChartLine,
//   faCheck,
//   faClipboardList,
//   faCog,
//   faCogs,
//   faDesktop,
//   faEdit,
//   faFileExcel,
//   faIndustry,
//   faPlus,
//   faPrint,
//   faSignal,
//   faSignInAlt,
//   faSyncAlt,
//   faTable,
//   faTags,
//   faTimes,
//   faUserAlt,
//   faUserAltSlash,
//   faUsers,
// } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-regular-svg-icons";
// import {
//   faCircle,
// } from "@fortawesome/free-solid-svg-icons";

const CustomBtn = ({
  className = "",
  name,
  onClick,
  // size = "lg",
  icon,
  disabled,
  spinner = true,
}) => {
  const [loading, setLoading] = useState(false);

  // const icons = {
  //   add: faPlus,
  //   admin: faCogs,
  //   areas: faIndustry,
  //   board: faDesktop,
  //   chart: faChartLine,
  //   close: faTimes,
  //   edit: faEdit,
  //   file: faFileExcel,
  //   login: faSignInAlt,
  //   plans: faClipboardList,
  //   print: faPrint,
  //   readers: faSignal,
  //   roles: faAddressCard,
  //   settings: faCog,
  //   shifts: faClock,
  //   signIn: faUserAlt,
  //   signOut: faUserAltSlash,
  //   submit: faCheck,
  //   table: faTable,
  //   tags: faTags,
  //   users: faUsers,
  // };

  return (
    <button
      className={`custom-btn ${className} ${disabled ? "disabled" : ""}`}
      onClick={() => {
        if (onClick) {
          new Promise(() => {
            if (spinner) {
              setLoading(true);
            }
            return new Promise(async () => {
              await onClick();
              return spinner && setLoading(false);
            });
          });
        }
      }}
      disabled={disabled}
    >
      {/* {loading ? (
        <FontAwesomeIcon icon={faSyncAlt} size={size} spin />
      ) : (
        <FontAwesomeIcon
          className={className === "custom-btn-collapse" ? "collapse-icon" : ""}
          icon={icons[icon]}
          size={size}
        />
      )} */}
      {name && <span className="custom-btn__title"> {name}</span>}
    </button>
  );
};

CustomBtn.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  // size: PropTypes.string,
  disabled: PropTypes.bool,
  spinner: PropTypes.bool,
};

export default CustomBtn;
