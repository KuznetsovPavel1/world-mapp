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

  return (
    Object.keys(country).length !== 0 && (
      // <div className="form-block">
      <div className="card">
        {country === "loading" ? (
          <Spinner />
        ) : (
          <Fragment>
            <h3>{name}</h3>
            <div className="card-inner">
              {flag && (
                <div>
                  <img src={flag} alt="flag" className="card-inner__flag" />
                </div>
              )}
              <div className="card-inner__data">
                {nativeName && <div>Native name: {nativeName}</div>}
                {region && <div>Region: {region}</div>}
                {subregion && <div>Subregion: {subregion}</div>}
                {area && <div>Area: {area + " km²"}</div>}
                {population && <div>Population: {population}</div>}
                {capital && <div>Capital: {capital}</div>}
                {languages?.length > 0 && (
                  <div>
                    Languages:
                    {languages?.map((lang, i) => (
                      <div key={i}>{lang.name}</div>
                    ))}
                  </div>
                )}
                {currencies?.length > 0 && (
                  <div>
                    Currencies:
                    {currencies?.map((currency, i) => (
                      <div key={i}>
                        {(currency.name || "") + " " + (currency.symbol || "")}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Fragment>
          // {/* </div> */}
        )}
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  country: state.countries.selected,
});

export default connect(mapStateToProps, {})(Card);
