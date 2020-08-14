import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty, addClass, removeClass } from "../../funcs/Functions";
import { clearCountry } from "../../store/actions/countriesActions";
import CustomBtn from "../common/CustomBtn";

const Card = ({ country, clearCountry }) => {
  const {
    alpha2Code,
    area,
    capital,
    currencies,
    flag,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
  } = country;

  const code = alpha2Code?.toLowerCase();

  const tableFields = {
    "Native name: ": nativeName,
    "Region: ": region,
    "Subregion: ": subregion,
    "Area (km²): ": area,
    "Population: ": population,
    "Capital: ": capital,
    "Languages: ": languages,
    "Currencies: ": currencies,
  };

  const [elems, setElems] = useState([]);

  useEffect(() => {
    if (!isEmpty(code)) {
      setElems(document.querySelectorAll(`.${code}`));
    }
  }, [code]);

  useEffect(() => {
    if (!isEmpty(elems)) {
      addClass(elems, "selected");
    }
  }, [elems]);

  const onBackClick = () => {
    if (!isEmpty(elems)) {
      removeClass(elems, "selected");
    }
    clearCountry();
  };

  return (
    <div className="card">
      <CustomBtn onClick={() => onBackClick()} />
      <h3>{name}</h3>
      <div className="card-inner">
        {flag && <img src={flag} alt="flag" className="card-inner__flag" />}
        <div className="card-inner__data">
          {Object.keys(tableFields).map((key, i) => {
            const row = tableFields[key];
            let val;

            if (Array.isArray(row)) {
              val = (
                <span className="tbl-cell__val">
                  {row.map((item, j) => (
                    <div key={j}>
                      {(item.name || "") + " " + (item.symbol || "")}
                    </div>
                  ))}
                </span>
              );
            } else {
              val = <span className="tbl-cell__val">{row}</span>;
            }

            return (
              <div key={i} className="tbl-row">
                <span className="tbl-cell__title">{key}</span>
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  country: PropTypes.object,
  clearCountry: PropTypes.func,
};

const mapStateToProps = (state) => ({
  country: state.countries.selected,
});

export default connect(mapStateToProps, { clearCountry })(Card);
