import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCountryByName } from "../../store/actions/countriesActions";
import CustomBtn from "../common/CustomBtn";
import Spinner from "../common/Spinner";

const List = ({ countries, getCountryByName }) => {
  // const [view, setView] = useState("list");
  const [clickedName, setClickedName] = useState(-1);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length > 0) {
      removeClass(list, "view");
    }

    const elems = selectElems(countries);

    addClass(elems, "view");
  }, [countries]);

  const selectElems = (countries) => {
    const selectedArr = [];
    if (Array.isArray(countries) && countries?.length > 0) {
      countries.forEach((country) => {
        selectedArr.push(
          ...document.querySelectorAll(`.${country.alpha2Code.toLowerCase()}`)
        );
      });
    }
    return selectedArr;
  };

  const addClass = (elems, className) => {
    if (Array.isArray(elems) && elems?.length > 0) {
      elems.forEach((elem) => elem?.classList?.add(className));
      setList(elems);
    }
  };

  const removeClass = (elems, className) => {
    if (elems.length > 0) {
      elems.forEach((elem) => elem?.classList.remove(className));
    }
  };

  const onClick = (i, code, name) => {
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
      getCountryByName(name);

      setSelectedCountry(code);
      const elems = document.querySelectorAll(`.${code}`);

      elems.forEach((elem) => {
        if (elem) {
          elem.classList.add("selected");
        }
      });
    }
  };

  return (
    <div className="countries-list">
      {countries === "loading" ? (
        <Spinner />
      ) : (
        countries?.map((country, i) => {
          return (
            <div
              className={`countries-list__item ${
                i === clickedName ? "clicked" : ""
              }`}
              key={i}
              onClick={() =>
                onClick(i, country.alpha2Code?.toLowerCase(), country.name)
              }
            >
              {country.name}
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // loading: state.loading,
  // countries: state.countries.list,
});

export default connect(mapStateToProps, {
  /* getAllCountries,*/ getCountryByName,
})(List);
