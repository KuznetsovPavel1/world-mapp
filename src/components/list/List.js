import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../../store/actions/countriesActions";
import CustomBtn from "../common/CustomBtn";

const List = ({ countries, getAllCountries }) => {
  const [view, setView] = useState("list");
  const [countriesArr, setCountries] = useState(countries || []);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  useEffect(() => {
    setCountries(countries || []);
  }, [countries]);

  const onClick = (code) => {
    const elems = document.querySelectorAll(`.${code.toLowerCase()}`);

    elems.forEach((elem) => {
      if (elem) {
        elem.classList.add("selected");
      }
    });
  };

  const onChange = (target) => {
    const countriesFilter = countries.filter((country) => {
      const regexp = new RegExp("^" + target.value + ".*$", "i");

      return regexp.test(country.name);
    });
    setCountries(countriesFilter);
  };

  return (
    <div>
      <div className="btns-group">
        <CustomBtn name="list" onClick={() => setView("list")} />
        <CustomBtn name="table" onClick={() => setView("table")} />
      </div>
      <input
        className="country-search"
        type="text"
        name="search"
        onChange={(e) => onChange(e.target)}
      />
      <div className="list">
        {countriesArr.map((country, i) => {
          return (
            <div key={i} onClick={() => onClick(country.alpha2Code)}>
              {country.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ countries: state.countries });

export default connect(mapStateToProps, { getAllCountries })(List);
