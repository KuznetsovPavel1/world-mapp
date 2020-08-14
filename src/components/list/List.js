import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { isEmpty, addClass, removeClass } from "../../funcs/Functions";
import { getCountryByName } from "../../store/actions/countriesActions";

const List = ({ countries, getCountryByName }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length > 0) {
      removeClass(list, "view");
    }

    const elems = selectElems(countries);

    addClass(elems, "view");
    setList(elems);
  }, [countries]);

  const selectElems = (countries) => {
    const selectedArr = [];

    countries.forEach((country) =>
      selectedArr.push(
        ...document.querySelectorAll(`.${country.alpha2Code.toLowerCase()}`)
      )
    );

    return selectedArr;
  };

  return (
    !isEmpty(countries) && (
      <div className="list">
        {countries.map((country, i) => (
          <div
            key={i}
            className="list__item"
            onClick={() => getCountryByName(country.name)}
          >
            {country.name}
          </div>
        ))}
      </div>
    )
  );
};

export default connect(null, { getCountryByName })(List);
