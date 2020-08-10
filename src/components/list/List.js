import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../../store/actions/countriesActions";
import CustomBtn from "../common/CustomBtn";
import Spinner from "../common/Spinner";

const List = ({ loading, countries, getAllCountries }) => {
  const [view, setView] = useState("list");
  const [countriesArr, setCountries] = useState(countries || []);
  const [search, setSearch] = useState("");
  const [clickedName, setClickedName] = useState(-1);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  useEffect(() => {
    setCountries(countries || []);
  }, [countries]);

  const onClick = (i, code) => {
    setClickedName(i);

    if (selectedCountry) {
      const elems = document.querySelectorAll(`.${selectedCountry}`);

      elems.forEach((elem) => {
        if (elem) {
          elem.classList.remove("selected");
        }
      });
    }

    if (code) {
      setSelectedCountry(code);
      const elems = document.querySelectorAll(`.${code}`);

      elems.forEach((elem) => {
        if (elem) {
          elem.classList.add("selected");
        }
      });
    }
  };

  useEffect(() => {
    const str = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

    const countriesFilter = countries.filter((country) => {
      const regexp = new RegExp("^.*" + str + ".*$", "i");

      return regexp.test(country.name);
    });

    setCountries(countriesFilter);
  }, [search, countries]);

  return (
    <div>
      <div className="btns-group">
        <CustomBtn name="list" onClick={() => setView("list")} />
        <CustomBtn name="table" onClick={() => setView("table")} />
      </div>
      <div className="list-block">
        <div className="search">
          <div className="search-group">
            <input
              className="search-group__input"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-group__icon">🔍</span>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="countries-list">
            {countriesArr.map((country, i) => {
              return (
                <div
                  className={`countries-list__item ${
                    i === clickedName ? "clicked" : ""
                  }`}
                  key={i}
                  onClick={() => onClick(i, country.alpha2Code?.toLowerCase())}
                >
                  {country.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  countries: state.countries,
});

export default connect(mapStateToProps, { getAllCountries })(List);
