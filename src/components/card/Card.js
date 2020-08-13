import React, { Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";

const Card = ({ country }) => {
  const {
    name,
    flag,
    nativeName,
    region,
    subregion,
    area,
    population,
    capital,
    languages,
    currencies,
  } = country;

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

  return (
    Object.keys(country).length !== 0 && (
      <div className="wrapper">
        {country === "loading" ? (
          <Spinner />
        ) : (
          <div className="card">
            <h3>{name}</h3>
            <div className="card-inner">
              {flag && (
                <img src={flag} alt="flag" className="card-inner__flag" />
              )}
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
                    <Fragment key={i}>
                      {/* {i > 0 && <hr />} */}
                      <div className="tbl-row">
                        <span className="tbl-cell__title">{key}</span>
                        {val}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  country: state.countries.selected,
});

export default connect(mapStateToProps, {})(Card);
